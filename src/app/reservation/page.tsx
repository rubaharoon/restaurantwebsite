import Header from "../../components/header";
import Footer from "../../components/footer";
export default function Reservation() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-center text-2xl font-semibold mb-8 text-purple-500">
          Book The Seat Now Here Easily
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          {/* Left: Image Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="../images/reservation.png"
              alt="Reservation Image"
              className="rounded-lg w-full object-cover ring-2 ring-purple-500"
            />
          </div>

          {/* Right: Form Section */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h3 className="text-xl font-semibold">Book your table now</h3>
            <p className="text-gray-600">
              The people, food and the prime locations make Rodich the perfect
              place for good friends & family to come together and have a great
              time.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border rounded-lg p-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="border rounded-lg p-2"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border rounded-lg p-2"
              />
              <input
                type="date"
                placeholder="Date"
                className="border rounded-lg p-2"
              />
              <input
                type="time"
                placeholder="Time"
                className="border rounded-lg p-2"
              />
              <input
                type="number"
                placeholder="Person"
                className="border rounded-lg p-2"
              />
              <div className="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  className="bg-purple-500 text-white rounded-lg px-6 py-2 w-full"
                >
                  Book a Table
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="container mx-auto py-10 px-4">
          {/* Gallery Header */}
          <div className="text-center mb-8">
            <h3 className="text-sm font-medium text-purple-500 tracking-wider mb-2">
              GALLERY
            </h3>
            <h2 className="text-2xl font-semibold">
              What You Can Expect From Us
            </h2>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Gallery Image 1 */}
            <div className="overflow-hidden rounded-lg h-64 ring-2 ring-purple-500 transition-transform duration-300 hover:scale-105">
              <img
                src="../images/dish1.jpg"
                alt="Dish or Ambience 1"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Gallery Image 2 */}
            <div className="overflow-hidden rounded-lg h-64 ring-2 ring-purple-500 transition-transform duration-300 hover:scale-105">
              <img
                src="../images/dish2.jpg"
                alt="Dish or Ambience 2"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Gallery Image 3 */}
            <div className="overflow-hidden rounded-lg h-64 ring-2 ring-purple-500 transition-transform duration-300 hover:scale-105">
              <img
                src="../images/dish3.jpg"
                alt="Dish or Ambience 3"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Gallery Image 4 */}
            <div className="overflow-hidden rounded-lg h-64 ring-2 ring-purple-500 transition-transform duration-300 hover:scale-105">
              <img
                src="../images/dish4.jpg"
                alt="Dish or Ambience 4"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
