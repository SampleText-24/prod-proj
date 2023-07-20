import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeaturesOptions<T> {
    feature: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({
    off,
    on,
    feature,
}: ToggleFeaturesOptions<T>): T {
    if (getFeatureFlag(feature)) {
        return on();
    }

    return off();
}
