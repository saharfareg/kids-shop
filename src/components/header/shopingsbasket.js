import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaShoppingCart } from 'react-icons/fa';
import headerStyle from './header.module.css'

export const TriggerExample=()=> {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      سبد خرید
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="">
      <FaShoppingCart ></FaShoppingCart>
      </Button>
    </OverlayTrigger>
  );
}

