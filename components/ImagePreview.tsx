import { useState, useEffect } from 'react';

interface ImagePreviewProps {
    onImageSelect: (image: File) => void;
}

function ImagePreview(props: ImagePreviewProps) {
    const [previewSrc, setPreviewSrc] = useState<string | null>(null);

    useEffect(() => {
        const fileInput = document.getElementById('file-input') as HTMLInputElement;
        const imagePreview = document.getElementById('image-preview') as HTMLImageElement;

        fileInput.addEventListener('change', function () {
            const file = fileInput.files?.[0];
            const reader = new FileReader();

            reader.addEventListener('load', function () {
                setPreviewSrc(reader.result as string);
                if (file) {
                    props.onImageSelect(file);
                } else {
                    throw new Error("Somehow it is not a file")
                }
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }
        });
    }, [props]);

    return (
        <>
            {
                previewSrc ?
                    (<div>
                        <div><label className="block mb-2 font-bold text-gray-700">Select an image:</label>
                            <input type="file" id="file-input" className="border border-gray-400 p-2 mb-4" />
                        </div>
                        <div className="w-64 h-64 bg-gray-200 border border-gray-400 rounded-md flex justify-center items-center">
                            {previewSrc && <img id="image-preview" src={previewSrc} className="max-h-full max-w-full" />}
                        </div>
                    </div>)
                    :
                    (<div><label className="block mb-2 font-bold text-gray-700">Select an image:</label>
                        <input type="file" id="file-input" className="border border-gray-400 p-2 mb-4" />
                    </div>)

            }
        </>
    );
}

export default ImagePreview;