import { Button } from '../common/Button';
import Header from './Header';
import { SkillButtons } from './SkillButtons';

export default function MainSection() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <h1>edit like a pro</h1>
      <h2>and make money</h2>
      <p>
        This is an intensive program designed for those who want to master the
        skills of professional video editing and graphic design
      </p>
      <div>
        <Button message={'Order'} />
        <p>Order from here</p>
      </div>
      <SkillButtons />
    </main>
  );
}
