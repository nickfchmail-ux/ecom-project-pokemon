import Modal from "./Modal";
import Table from "./Table";
function Contact() {
  return (
    <div>
      Contact Page
      <Modal>
        <Modal.Open open="table">
          <button>open</button>
        </Modal.Open>

        <Modal.Window name="table">
          <Table />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default Contact;
