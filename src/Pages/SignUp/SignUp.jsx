import Nav from "../../components/Navigation/Nav";
import SubNav from "../../components/SubNavigation/SubNav";
import { Button, Label, TextInput } from "flowbite-react";
import { Card } from "antd";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  async function handleSignUp() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <SubNav />
      <Nav />
      <div className="flex justify-center items-center">
        <Card
          className=""
          bordered={false}
          style={{
            marginTop: 100,
            width: 500,
          }}
        >
          <h2 className="text-center font-bold">Sign Up</h2>
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit2" onClick={handleSignUp}>
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
}
export default SignUp;
