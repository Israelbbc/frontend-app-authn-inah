import { Image } from '@openedx/paragon';
import logoOllinBlanco from '../../../assets/Ollin-blanco.png';

const LargeLayout = () => (
  <div className="w-50 d-flex login-brand-panel-inah">
    <div className="col-12 login-brand-panel-inah__bg d-flex align-items-center justify-content-center">
      <Image
        className="login-brand-panel-inah__logo"
        alt="Aula INAH"
        src={logoOllinBlanco}
      />
    </div>
  </div>
);

export default LargeLayout;
