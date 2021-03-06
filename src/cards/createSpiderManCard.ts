import SpiderManBack from "../images/spider-man/card.png";
import SpiderMan from "../images/spider-man/spider-man.png";
import SpiderManLabel from "../images/spider-man/label.png";

import { LayerTypeEnums } from "../types";

export const createSpiderManCard = (index: number) => {
	return {
		id: `${index}`,
		index: index,
		cardBack: {
			src: SpiderManBack,
		},
		layers: [
			{
				index: 2,
				type: LayerTypeEnums.PERSON,
				src: SpiderMan,
			},
			{
				index: 3,
				type: LayerTypeEnums.OTHER,
				src: SpiderManLabel,
			},
		],
	};
};
