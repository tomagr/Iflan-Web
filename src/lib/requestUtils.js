export const objectToFormData = object => Object
	.keys( object )
	.reduce(
		( formData, key ) => {
			formData.append( key, object[ key ] );
			return formData;
		},
		new FormData()
	);
