import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Target, Code, BookOpen, Trophy } from 'lucide-react';
import webImage from '@/assets/web.jpg';
import presidentImg from '@/assets/president.jpg';
import vicePresidentLaxmiImg from '@/assets/vicePresident-laxmi.jpg';
import treasurerImg from '@/assets/treasurer.jpg';
import { Link } from 'react-router-dom';

import FloatingITIconsBG from '@/components/FloatingITIconsBG';

const Home = () => {
  const testimonials = [
    {
      name: 'Madhav Poudel',
      role: 'President',
      company: 'CSIT Association of Nepal - Rupandehi',
      content:
        'CSITAN Rupandehi provided me with incredible networking opportunities and helped shape my career in technology.',
      photo: presidentImg,
    },
    {
      name: 'Laxmi Khanal',
      role: 'Vice President',
      company: 'CSIT Association of Nepal - Rupandehi',
      content:
        'The events organized by CSITAN were instrumental in keeping me updated with latest technology trends.',
      photo: vicePresidentLaxmiImg,
    },
    {
      name: 'Nirmal Kharal',
      role: 'Treasurer',
      company: 'CSIT Association of Nepal - Rupandehi',
      content:
        'Being part of CSITAN community opened doors to mentorship and collaboration opportunities.',
      photo: treasurerImg,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[100vh] flex items-center justify-center bg-cover bg-center bg-no-repeat w-full overflow-hidden"
        style={{
          backgroundImage: `url(${webImage})`,
        }}
      >
  {/* Overlay to reduce background opacity for better text readability */}
  <div className="absolute inset-0 bg-black/80 z-0" />
  {/* Floating IT Icons Animated BG */}
  <FloatingITIconsBG />
        {/* Content centered above animation */}
        <div className="relative z-10 text-white px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg"
          >
            Learning Today,
            <br className="hidden sm:block" />
            <span className="block mt-3 text-primary">Leading Tomorrow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl mb-8 max-w-3xl leading-relaxed drop-shadow"
          >
            CSIT Association of Nepal - Rupandehi is a non-profit organization dedicated to bridging the gap between CSIT students, universities, and the industry through meaningful and impactful programs and initiatives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Join Us Button */}
            <a
              href="https://www.facebook.com/csitan.rupandehi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-secondary text-primary-foreground transition-colors duration-300"
              >
                Join Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>

            {/* Contact Us Button - always white text */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <a href="/contact#get-in-touch">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-black border-white hover:text-black hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  Contact Us
                </Button>
              </a>
            </motion.div>
          </motion.div>
          {/* Since 2017 badge below the buttons */}
          <div className="flex justify-center mt-8">
            <span className="bg-primary text-white text-2xl font-bold px-10 py-3 rounded-full shadow-lg border-4 border-white select-none tracking-wide">
              Since 2017
            </span>
          </div>
        </div>
      </section>

      {/* About Teaser */}
  <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-[#CF4546]">Who We Are</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                CSITAN Rupandehi is a regional body of CSIT Association of Nepal, established to
                serve as a bridge between students, faculty, and the IT industry. We are committed
                to empowering young minds with knowledge, skills, and opportunities.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Code className="h-5 w-5 text-primary mr-3" />
                  <span>Technology Advancement</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-3" />
                  <span>Community Building</span>
                </li>
                <li className="flex items-center">
                  <BookOpen className="h-5 w-5 text-primary mr-3" />
                  <span>Knowledge Sharing</span>
                </li>
              </ul>
              <Link to="/about">
                <Button className="bg-primary hover:bg-secondary text-primary-foreground">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative bg-white rounded-3xl shadow-2xl p-10 border-4 border-primary mx-auto max-w-xl flex flex-col items-center">
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-lg font-semibold px-6 py-1 rounded-full shadow border-2 border-white z-10 select-none">
                  Our Vision
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-primary mb-2 tracking-tight text-center mt-4">
                  &quot;Calibrating Technical Potential&quot;
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
  <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">What Our Members Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our community members about their experiences with CSITAN Rupandehi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-primary shadow-xl">
                  <CardContent className="p-6 flex flex-col items-center">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-primary shadow"
                      draggable="false"
                    />
                    <p className="text-gray-700 mb-4 italic text-center">"{testimonial.content}"</p>
                    <div className="text-center">
                      <h4 className="font-semibold text-primary text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-secondary font-medium">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <Trophy className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of a vibrant community of technology enthusiasts and advance your career with
              us.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdGZHKjSLPeYUcUXHEmR2fo066kFRpk2AjORwfW5F0XidLw0Q/closedform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-black border-white hover:bg-[#CF4546] hover:text-white"
              >
                Join CSITAN Rupandehi Today
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
