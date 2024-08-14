/**
 * A simple loader component that can be used to indicate that some content is loading.
 * 
 * The component consists of two circles, one for the track and one for the car.
 * The track is a full circle with a stroke width of 5px, and the car is a circle with a stroke width of 5px and a dashed stroke.
 * The car is animated to move around the track in a circular motion.
 */
import './style.css';

/**
 * The Loader component.
 * @returns {JSX.Element} The JSX element for the Loader component.
 */
export function Loader() {
    return (
        <div className='h-full w-full flex justify-center items-center overflow-hidden'>
            {/* The SVG element for the loader. The viewbox is set to 0 0 40 40, which means the SVG will be 40x40 units in size. The height and width attributes are set to 40, which means the SVG will be rendered at 40x40 pixels in size. */}
            <svg
                className="container -mt-40"
                viewBox="0 0 40 40"
                height="40"
                width="40"
            >
                {/* The track circle. The cx and cy attributes are set to 20, which means the circle will be centered in the SVG. The r attribute is set to 17.5, which means the circle will have a radius of 17.5 units. The pathLength attribute is set to 100, which means the circle will have a path length of 100 units. The strokeWidth attribute is set to 5px, which means the circle will have a stroke width of 5px. The fill attribute is set to none, which means the circle will not be filled. */}
                <circle
                    className="track"
                    cx="20"
                    cy="20"
                    r="17.5"
                    pathLength="100"
                    strokeWidth="5px"
                    fill="none"
                />
                {/* The car circle. The cx and cy attributes are set to 20, which means the circle will be centered in the SVG. The r attribute is set to 17.5, which means the circle will have a radius of 17.5 units. The pathLength attribute is set to 100, which means the circle will have a path length of 100 units. The strokeWidth attribute is set to 5px, which means the circle will have a stroke width of 5px. The fill attribute is set to none, which means the circle will not be filled. The stroke-dasharray attribute is set to 25,75, which means the circle will have a dashed stroke with a length of 25 units and a gap of 75 units. */}
                <circle
                    className="car"
                    cx="20"
                    cy="20"
                    r="17.5"
                    pathLength="100"
                    strokeWidth="5px"
                    fill="none"
                    strokeDasharray="25,75"
                />
            </svg>
        </div>
    )
}