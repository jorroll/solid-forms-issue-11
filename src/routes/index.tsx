import Counter from "~/components/Counter";
import "./index.css";
import { createFormControl, isAbstractControlContainer } from 'solid-forms/core'
import { TextInput } from "~/components/TextInput";

export default function Home() {
  const control = createFormControl(0);

  return (
    <main>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
        <button type='button' onClick={() => control.setValue(control.value + 1)}>
          {control.value}
        </button>
        <TextInput />
      </p>
    </main>
  );
}
