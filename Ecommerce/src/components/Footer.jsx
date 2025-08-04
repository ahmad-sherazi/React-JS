import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10 md:flex-row md:justify-between">
        
        {/* Logo and Info */}
        <div>
          <Link to="">
            <h1 className="text-white font-serif text-3xl font-bold">
              <span className="text-5xl text-blue-300">A</span>hmad
            </h1>
          </Link>
          <p className="mt-2 text-sm">Powering Your World with the Best in Electronics.</p>
          <p className="mt-2 text-sm">1046 Electronics shop, Ghakkhar City, Niwan Bazaar</p>
          <p className="text-sm">Email: muhammadahmadsherazi5@gmail.com</p>
          <p className="text-sm">Phone: 0311-6353403</p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
          <ul className="text-sm space-y-2">
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>FAQs</li>
            <li>Order Tracking</li>
            <li>Size Guide</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-left"> {/* 🔥 center on mobile, left on md+ */}
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitterSquare />
            <FaPinterest />
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Stay in the Loop</h3>
          <p className="text-sm mb-4">Subscribe to get special offers, free giveaways, and more.</p>
          <form className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 text-black w-full sm:w-[250px] rounded-md sm:rounded-r-none mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-gray-900 to-blue-300 text-white font-bold py-2 px-4 sm:rounded-l-none rounded-md sm:rounded-r-md transition hover:opacity-90 hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold font-serif">
          <span className="text-blue-300 text-xl">A</span>hmad
        </span>
        . All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
