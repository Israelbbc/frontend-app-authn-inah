import { getConfig } from '@edx/frontend-platform';
import { Hyperlink, Image } from '@openedx/paragon';
import logoOllinBlanco from '../../../assets/Ollin-blanco.png';

const LargeLayout = () => (
  <div className="w-50 d-flex login-brand-panel-inah">
    <div className="col-12 login-brand-panel-inah__bg d-flex align-items-center justify-content-center">
      <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
        <Image
          className="login-brand-panel-inah__logo"
          alt={getConfig().SITE_NAME}
          src={logoOllinBlanco}
        />
      </Hyperlink>
    </div>
  </div>
);

export default LargeLayout;
