import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UseCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  image: "https://source.unsplash.com/_CTpGHp8nGk",
  name: "Kazutoshi",
  email: "unko@hananoana.com",
  phone: "123456789",
  company: {
    name: "Paron.inc"
  },
  website: "hananoana.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>Konnichiwa</PrimaryButton>
      <SecondaryButton>Konnichiwa</SecondaryButton>
      <br />
      <SearchInput />
      <br />
      <UseCard user={user} />
    </div>
  );
}
