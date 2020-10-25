import { openPopupWidget } from "react-calendly";

import Button from "components/CustomButtons/Button.js";

const CalendlyButton = ({ url, prefill, pageSettings, utm, text }) => {
  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });

  return <Button onClick={onClick} size="lg" color="primary" target="_blank">
    {text}
  </Button>;
};

export default CalendlyButton;
