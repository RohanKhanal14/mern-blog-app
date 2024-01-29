import { Button, Card, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";

const DashProfile = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Card className="w-full rounded-none shadow-none">
        <div className="flex flex-col items-center pb-10">
          <h1 className="font-semibold text-3xl my-7 uppercase">profile</h1>
          <img 
            alt="Bonnie image"
            height="96"
            src={currentUser.rest.profilePic}
            width="96"
            className="mb-3 rounded-full shadow-lg"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {currentUser.rest.username}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {currentUser.rest.email}
          </span>

          <form className=" w-1/2 flex flex-col gap-4 mt-4">
            <TextInput
              type="text"
              id="username"
              placeholder="username"
              defaultValue={currentUser.rest.username}
            ></TextInput>
            <TextInput
              type="email"
              id="email"
              placeholder="email"
              defaultValue={currentUser.rest.email}
            ></TextInput>
            <TextInput
              type="password"
              id="password"
              placeholder="password"
              defaultValue="********"
            ></TextInput>
            <Button type="submit" gradientDuoTone="purpleToBlue" outline>
              Update
            </Button>
          </form>
        </div>

        <div className="text-red-500 flex justify-between mt-5">
          <span className="cursor-pointer">Delete Account</span>
          <span className="cursor-pointer">Sign Out</span>
        </div>
      </Card>
    </>
  );
};

export default DashProfile;
