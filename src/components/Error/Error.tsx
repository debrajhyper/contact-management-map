import { IconCircleXFilled } from '@tabler/icons-react';

export function Error() {
    return (
        <div className='h-full w-full flex justify-center items-center overflow-hidden -mt-20'>
            <div className="col-span-full flex flex-col justify-center items-center gap-3 p-4 rounded-lg w-fit mx-auto">
                <IconCircleXFilled size={50} color='#f75050' />
                <p className="font-semibold text-neutral-400 text-start">
                    Error loading content, Please try again!
                </p>
            </div>
        </div>
    )
}
