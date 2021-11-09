import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './InputLabel.module.scss'

export default function InputLabel({
    children,
    label,
    isVisuallyHidden,
    size,
    ...props
}) {
    const className = cn(styles.label, {
        visuallyHidden: isVisuallyHidden,
        [styles.large]: size === 'large',
    })

    return (
        <label className={className} htmlFor={props.id || props.name}>
            {label}
            {children}
        </label>
    )
}

InputLabel.defaultProps = {
    size: 'regular',
}

InputLabel.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    label: PropTypes.string,
    isVisuallyHidden: PropTypes.bool,
    name: PropTypes.string,
    size: PropTypes.string,
}
