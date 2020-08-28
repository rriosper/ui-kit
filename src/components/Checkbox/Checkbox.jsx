import styled, { css } from "@xstyled/styled-components";
import { variant } from "@xstyled/system";
import PropTypes from "prop-types";
import { Checkbox as RCheckbox } from "reakit";
import { createCleanComponent } from "#utils";

const CleanCheckbox = createCleanComponent(RCheckbox, ["size"]);

export const Checkbox = styled(CleanCheckbox)`
  color: red;

  ${variant({
    prop: "size",
    default: "medium",
    variants: {
      small: css`
        width: sm;
        height: sm;
      `,
      medium: css`
        width: md;
        height: md;
      `,
      big: css`
        width: lg;
        height: lg;
      `,
    },
  })}
`;

Checkbox.defaultProps = {
  defaultChecked: false,
  onChange: undefined,
};

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
