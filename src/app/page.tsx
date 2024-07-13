import Activity from './parts/Activity';
import Benefit from './parts/Benefit';
import Description from './parts/Description';
import Information from './parts/Information';
import Landing from './parts/Landing';
import Partner from './parts/Partner';
import Sale from './parts/Sale';
import SignUp from './parts/SignUp';

export default function Home() {
  return (
    <main className="flex flex-col gap-32 overflow-hidden">
      <Landing />
      <Benefit />
      <Description />
      <Partner />
      <Activity />
      <Sale />
      <SignUp />
      <Information />
    </main>
  );
}
