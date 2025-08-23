import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Users, Target, Code, BookOpen, Trophy } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Home = () => {
  const events = [
    {
      title: 'CSITAN Networking Bootcamp 2082',
      date: 'Shrawan 25-27, 2082',
      type: 'Bootcamp',
      description:
        'Join us for our biggest annual event featuring industry experts and cutting-edge technology discussions.',
    },
    {
      title: 'Coding Bootcamp',
      date: 'April 8-10, 2024',
      type: 'Workshop',
      description:
        'Intensive 3-day coding workshop covering modern web development technologies and best practices.',
    },
    {
      title: 'Hackathon 2024',
      date: 'May 20-22, 2024',
      type: 'Competition',
      description:
        '48-hour hackathon challenging students to build innovative solutions for real-world problems.',
    },
  ];

  const testimonials = [
    {
      name: 'Raj Sharma',
      role: 'Software Engineer',
      company: 'Tech Corp Nepal',
      content:
        'CSITAN Rupandehi provided me with incredible networking opportunities and helped shape my career in technology.',
      avatar: '👨‍💻',
    },
    {
      name: 'Sita Poudel',
      role: 'Data Scientist',
      company: 'Innovation Labs',
      content:
        'The events organized by CSITAN were instrumental in keeping me updated with latest technology trends.',
      avatar: '👩‍💻',
    },
    {
      name: 'Anil Thapa',
      role: 'Tech Entrepreneur',
      company: 'StartupX',
      content:
        'Being part of CSITAN community opened doors to mentorship and collaboration opportunities.',
      avatar: '👨‍🎓',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Empowering Students,
            <br />
            <span className="text-primary">Advancing Technology</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            CSIT Association of Nepal - Rupandehi is dedicated to bridging the gap between academia
            and industry, fostering innovation and professional growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Join Us Button */}
            <Button
              size="lg"
              className="bg-primary hover:bg-secondary text-primary-foreground transition-colors duration-300"
            >
              Join Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Contact Us Button - always white text */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Button
                size="lg"
                variant="outline"
                className="text-black border-white hover:text-black hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-accent">
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
                <h2 className="text-3xl font-bold text-foreground">Who We Are</h2>
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
              <Button className="bg-primary hover:bg-secondary text-primary-foreground">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 text-center"
            >
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To foster technological innovation, professional development, and create a
                collaborative ecosystem for CSIT students in Rupandehi district.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us in our exciting events designed to enhance your skills and expand your network
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="mb-2">
                        {event.type}
                      </Badge>
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {event.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">What Our Members Say</h2>
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
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{testimonial.avatar}</div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-primary">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
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
            <Button
              size="lg"
              variant="outline"
              className="text-black border-white hover:bg-red-500 hover:text-white"
            >
              Join CSITAN Rupandehi Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
