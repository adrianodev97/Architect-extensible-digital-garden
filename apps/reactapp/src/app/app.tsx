
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NxWelcome from "./nx-welcome";
import { TopicButton } from "@website/shared/ui";


export function App() {

  return (
    <>
      <NxWelcome title="reactapp"/>
      <TopicButton topicName="React"/>
      <div />
    </>);

}


export default App;

