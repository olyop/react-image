import { createElement, FC } from "react"
import { createBEM, BEMInput, BEMPropTypes } from "@oly_op/bem"

import "./index.scss"

const bem = createBEM("Image")

const Image: FC<ImagePropTypes> = ({
	url,
	title,
	onClick,
	children,
	className,
	imgClassName,
}) => (
	<div
		title={title}
		onClick={onClick}
		className={bem(className, "")}
	>
		<div
			className={bem(imgClassName, "main")}
			style={{ backgroundImage: `url(${url})` }}
		/>
		{children}
	</div>
)

export interface ImagePropTypes extends BEMPropTypes {
	url: string,
	title?: string,
	imgClassName?: BEMInput,
	onClick?: () => void | Promise<void>,
}

export default Image