import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsMessageError, setIsAuth } from "../../store/reducers/auth";
import { isAuthSelector } from "../../store/selectors";
import { Button, Card, Label, TextInput } from "flowbite-react";

const Auth = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(isAuth);
  }, [isAuth]);

  return (
    <div className="w-screen flex justify-center">
      <Card className="max-w-sm">
        <form className="flex flex-col gap-4 bg-inherit">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your login" />
            </div>
            <TextInput
              id="email1"
              type="text"
              placeholder="user"
              onChange={({ target }) => setLogin(target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              placeholder="user"
              onChange={({ target }) => setPassword(target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            color="blue"
            onClick={(e) => {
              e.preventDefault();
              if (login === "user" && password === "user") {
                dispatch(setIsAuth());
                dispatch(setIsMessageError(false));
                return navigate("/choose-team");
              }
              dispatch(setIsMessageError(true));
            }}
          >
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Auth;
