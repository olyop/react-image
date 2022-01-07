import { createElement, FC } from "react"
import { createBEM, BEMInput } from "@oly_op/bem"

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

export interface ImagePropTypes {
	url: string,
	title?: string,
	className?: BEMInput,
	imgClassName?: BEMInput,
	onClick?: () => void | Promise<void>,
}

export default Image