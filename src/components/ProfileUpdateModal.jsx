import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";
import { toast } from "react-toastify";

const ProfileUpdateModal = () => {
  const updateUser = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    // console.log(name, photo);

    if (!name || !photo) {
      return toast.error("All Fields are Required");
    }
    await authClient.updateUser({
      name: name,
      image: photo,
    });
  };
  return (
    <Modal>
      <Button>
        <BiEdit></BiEdit> Update Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Your Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={updateUser} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input name="name" placeholder="Enter your name" />
                  </TextField>

                  <TextField className="w-full pt-3" name="photo">
                    <Label>Photo URL</Label>
                    <Input name="photo" placeholder="Enter your Photo URL" />
                  </TextField>

                  <Modal.Footer className="pt-5">
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Save
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default ProfileUpdateModal;
