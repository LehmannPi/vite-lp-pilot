import { AfterEffectsTag } from '../../common/svg-components/AfterEffectsTag';
import { PhotoshopTag } from '../../common/svg-components/PhotoshopTag';
import { PremiereTag } from '../../common/svg-components/PremiereTag';
import './index.scss';

export const SkillButtons = () => {
  return (
    <div className="skill-group">
      <PremiereTag />
      <PhotoshopTag />
      <AfterEffectsTag />
    </div>
  );
};
