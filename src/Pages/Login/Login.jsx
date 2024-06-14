import Nav from "../../components/Navigation/Nav";
import SubNav from "../../components/SubNavigation/SubNav";
import { Card } from "antd";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button, Label, TextInput } from "flowbite-react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  // const navigate = useNavigate();
  async function handleSignIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);

        // navigate("/");
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
          <h2 className="text-center font-bold">Login</h2>
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="emailogin" value="Email" />
              </div>
              <TextInput
                id="emaillogin"
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="passwordl" value="Password" />
              </div>
              <TextInput
                id="passwordl"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" onClick={handleSignIn}>
              Login
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
}
export default Login;
