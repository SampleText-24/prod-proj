import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

/**
 * @deprecated
 */
export const VStack = (props: VStackProps) => {
    const { align } = props;
    return <Flex {...props} direction="column" align={align} />;
};
