import About from './about/About'
import FAQSection from './faq/FAQSection'
import Hero from './hero/Hero'
import MealOptionsSection from './mealOptions/MealOptionsSection'
import OrderSection from './orderingSection/OrderSection'
import FreshnessPromiseSection from './promiseSection/FreshnessPromiseSection'
import CustomerTestimonials from './testimonials/CustomerTestimonials'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <MealOptionsSection/>
      <OrderSection/>
      <FreshnessPromiseSection/>
      <CustomerTestimonials/>
      <FAQSection/>
    </div>
  )
}

export default Home
