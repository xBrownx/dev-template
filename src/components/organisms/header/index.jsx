import { memo } from 'react';
import { headerConst as CONST } from './constants'
import { useScroll } from '../../../hooks/useScroll'
import { Container } from './styles';
import { Column, Row } from "../../atoms";


function Header(props) {
    const pageRefs = props.$pageRefs

    const { y, x, scrollDirection } = useScroll();

    return (
        <Container
            $height={104}
            $hidden={scrollDirection === "up"}
        >
            <Row
                $fillParent
                $gap={20}
                onClick={() => props.navigateTo("landing")}
            >

                <Column>
                </Column>
            </Row>
        </Container>
    );
}



export default memo(Header);
