import { memo } from 'react'
import { footerConst as CONST } from './constants';
import { Container, LeftSubtitle, LeftTitle, Image } from "./styles";
import { Column, Row, SplitScreen } from "../../atoms";

function Footer() {
    return (
        <Container>
            <SplitScreen
                $paddingInline={32}
                $paddingBottom={16}
            >
                <Row $gap={20}>
                </Row>
                <Column $justifyEnd>
                </Column>
            </SplitScreen>
        </Container>
    );
}

export default memo(Footer);
