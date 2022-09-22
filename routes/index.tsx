import Counter from "../islands/Counter.tsx";
import Joke from "../islands/Joke.tsx";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <Joke />
      <Counter start={3} />
    </div>
  );
}