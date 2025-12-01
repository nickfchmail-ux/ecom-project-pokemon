import { createEditPokemons } from "@/services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PokemonInput from "./PokemonInput";
function Table({ isEditSession = false, editingPokemon = null, setEditingID }) {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: isEditSession
      ? {
          name: editingPokemon?.name || "",
          maxCapacity: editingPokemon?.maxCapacity || "",
          regularPrice: editingPokemon?.regularPrice || "",
          discount: editingPokemon?.discount || "",
          description: editingPokemon?.description || "",
          image: editingPokemon?.image || "",
        }
      : {},
  });

  const { mutate: createPokemons, isPending: isCreating } = useMutation({
    mutationFn: (newPokemon) => createEditPokemons(newPokemon),
    onSuccess: () => {
      toast.success("New Pokémon successfully created!");
      queryClient.invalidateQueries({ queryKey: ["pokemons"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const { mutate: editPokemon, isPending: isEditing } = useMutation({
    mutationFn: (newPokemon) =>
      createEditPokemons(newPokemon, editingPokemon.id),
    onSuccess: () => {
      toast.success("Pokémon successfully updated!");
      queryClient.invalidateQueries({ queryKey: ["pokemons"] });
      reset();
      setEditingID?.(null); // exit edit mode
    },
    onError: (err) => toast.error(err.message),
  });

  const isWorking = isCreating || isEditing || isSubmitting;

  function onSubmit(data) {
    console.log(`Data received from fontend: ${JSON.stringify(data)}`);
    const image =
      data.image?.[0] || (isEditSession ? editingPokemon.image : null);

    const pokemonData = {
      ...data,
      image,
    };

    if (isEditSession) {
      editPokemon(pokemonData);
    } else {
      createPokemons(pokemonData);
    }
  }

  function onError(errors) {
    console.log("Validation errors:", errors);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="mx-auto my-8 max-w-4xl rounded-xl border border-gray-300 bg-white p-8 shadow-lg"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <PokemonInput
          label="name"
          setValue={setValue}
          trigger={trigger}
          register={register}
          errors={errors}
          disabled={isWorking}
          options={{
            required: "This field is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          }}
        />

        <PokemonInput
          label="maxCapacity"
          register={register}
          setValue={setValue}
          trigger={trigger}
          errors={errors}
          disabled={isWorking}
          type="number"
          options={{
            required: "Required",
            min: { value: 1, message: "Capacity must be at least 1" },
            valueAsNumber: true,
          }}
        />

        <PokemonInput
          label="regularPrice"
          register={register}
          setValue={setValue}
          trigger={trigger}
          errors={errors}
          disabled={isWorking}
          type="number"
          options={{
            required: "Required",
            min: { value: 1, message: "Price must be greater than 0" },
            valueAsNumber: true,
          }}
        />

        <PokemonInput
          label="discount"
          setValue={setValue}
          trigger={trigger}
          register={register}
          errors={errors}
          disabled={isWorking}
          type="number"
          options={{
            min: { value: 0, message: "Discount cannot be negative" },
            valueAsNumber: true,
          }}
        />

        <PokemonInput
          label="description"
          setValue={setValue}
          trigger={trigger}
          register={register}
          errors={errors}
          disabled={isWorking}
          as="textarea"
          options={{
            required: "Description is required",
          }}
        />

        <PokemonInput
          label="image"
          setValue={setValue}
          trigger={trigger}
          register={register}
          errors={errors}
          disabled={isWorking}
          type="file"
          accept="image/*"
          options={{
            required: "file is required",
          }}
        />
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <button
          type="button"
          onClick={() => {
            reset();
            setEditingID?.(null);
          }}
          className="rounded-lg bg-gray-200 px-6 py-3 font-medium text-gray-700 hover:bg-gray-300"
          disabled={isWorking}
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isWorking}
          className="rounded-lg bg-amber-500 px-8 py-3 font-bold text-black shadow-md transition hover:bg-amber-600 disabled:opacity-50"
        >
          {isWorking
            ? "Saving..."
            : isEditSession
              ? "Update Pokémon"
              : "Add Pokémon"}
        </button>
      </div>
    </form>
  );
}

export default Table;
