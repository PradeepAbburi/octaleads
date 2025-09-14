
import { JSX } from 'react';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			mesh: any;
			sphereGeometry: any;
			meshStandardMaterial: any;
			ambientLight: any;
			pointLight: any;
		}
	}
}
