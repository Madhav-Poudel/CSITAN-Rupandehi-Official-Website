import background from '@/assets/background.jpg';
import waveDivider from '@/assets/wave-divider.svg';
import heroImage from '@/assets/hero-bg.jpg';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock, ExternalLink, Star, Handshake, UserCheck, Briefcase } from 'lucide-react';
import { useEffect, useState } from 'react';
// Animated Counter Component
const AnimatedCounter = ({ to, duration = 1.5 }: { to: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = to / (duration * 60);
    let frame: number;
    const animate = () => {
      start += increment;
      if (start < to) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [to, duration]);
  return <span>{count}</span>;
};

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Tech Symposium 2024',
      date: 'March 15, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'Butwal Multiple Campus',
      type: 'Conference',
      status: 'upcoming',
      attendees: 300,
      description: 'Join us for our biggest annual event featuring keynote speeches from industry leaders, technical workshops, and networking opportunities.',
      image: '�', // Conference
    },
    {
      id: 2,
      title: 'Coding Bootcamp: React & Node.js',
      date: 'April 8-10, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Lumbini City College',
      type: 'Workshop',
      status: 'upcoming',
      attendees: 50,
      description: 'Intensive 3-day hands-on workshop covering modern web development with React.js and Node.js.',
      image: '�️', // Workshop
    },
    {
      id: 3,
      title: 'Innovation Hackathon 2024',
      date: 'May 20-22, 2024',
      time: '6:00 PM Fri - 6:00 PM Sun',
      location: 'Nepathya College',
      type: 'Competition',
      status: 'upcoming',
      attendees: 120,
      description: '48-hour hackathon challenging teams to build innovative solutions for local community problems.',
      image: '🏆', // Competition
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'CSITAN Networking Bootcamp 2082',
      date: 'Shrawan 25th - 27th, 2082',
      location: 'Horizon GBS School, Drivertol',
      type: 'Bootcamp',
      attendees: 63,
      description: '30-hour hands-on, immersive bootcamp on Networking fundamentals organized by CSITAN in 2082.',
      image: '🛜', // Bootcamp
      highlights: ['60+ participants', 'Network Expert', 'Hands-on projects'],
    },
    {
      id: 5,
      title: 'Web Designing Essentials 2.0',
      date: 'Mangsir 15th - 23rd, 2081',
      location: 'Lumbini City College',
      type: 'Workshop',
      attendees: 40,
      description: 'Advanced continuation workshop introducing modern web design tools, frameworks, and trends with React.js.',
      image: '👨🏻‍💻', // Workshop
      highlights: ['25+ companies', 'Web Dev Experts', 'Project Based Learning'],
    },
    {
      id: 6,
      title: 'Web Designing Essential',
      date: 'Magh 2nd - 6th, 2079',
      location: 'Lumbini City College',
      type: 'Workshop',
      attendees: 40,
      description: 'Educational workshop on cybersecurity best practices and threat awareness.',
      image: '🌐',
      highlights: ['Security experts', 'Practical demonstrations', 'Certificate provided'],
    },
    {
      id: 7,
      title: '3 days Hands-on Python Django Framework',
      date: 'Poush 10th - 12th, 2078',
      location: 'Lumbini City College',
      type: 'Competition',
      attendees: 80,
      description: '3-day mobile app development competition with prizes for best apps.',
      image: '📱',
      highlights: ['Expert mentors', 'Exciting challenges', 'Prizes for winners'],
    },
    {
      id: 8,
      title: 'IT Teachers Futsal Cup',
      date: 'Falgun 8th, 2077',
      location: 'Friends Bistro and Sports, Manigram',
      type: 'Sport',
      attendees: 48,
      description: 'Exciting futsal tournament for IT teachers to promote fitness and teamwork.',
      image: '⚽',
      highlights: ['Friendly competition', 'Networking opportunities', 'Refreshments provided'],
    },
    {
      id: 9,
      title: 'Nepathya Overnight Hackathon',
      date: 'Magh 19th - 21st, 2076',
      location: 'Nepathya College',
      type: 'Hackathon',
      attendees: 50,
      description: '48-hour hackathon challenging teams to build innovative solutions for local community problems.',
      image: '🏆',
      highlights: ['24-hour coding', 'Cash prizes', 'Networking with experts'],
    },
  ];

  return (

    <div className="min-h-screen">
      {/* Events & Activities (Hero) Section */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(10,18,40,0.7), rgba(10,18,40,0.7)), url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              <span className="text-white">Events</span> <span className="text-blue-400">&</span> <span className="text-white">Activities</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Join our exciting events designed to enhance your technical skills, expand your network, and advance your career in technology.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Past Events Gallery */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Past Events</h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Take a look at our successful past events and their achievements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">
                        {event.type}
                      </Badge>
                      <span className="text-3xl">{event.image}</span>
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      {event.attendees} participants
                    </div>
                    {event.highlights && (
                      <div className="pt-2">
                        <h4 className="font-medium text-sm mb-2">Highlights:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {event.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(10,18,40,0.85), rgba(10,18,40,0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay moved below content for better text visibility */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Want to participate in Upcoming events?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We regularly organize a variety of tech events, workshops, and competitions for students and enthusiasts. Stay tuned for exciting opportunities to learn, connect, and grow with the CSITAN community!
            </p>
            <div
              className="inline-block px-8 py-3 rounded-full font-bold text-lg bg-blue-400 text-black transition-colors duration-300 select-none cursor-default hover:bg-red-500 hover:text-white"
              tabIndex={-1}
            >
              Stay Tuned
            </div>
          </motion.div>
        </div>
      </section>
      {/* Stats Section (at end) */}
  <section className="py-12 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Event <span className="text-blue-400">&</span> Statistics</h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Here are some key numbers that highlight our impact and engagement through various events and collaborations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-8 bg-white/10 rounded-xl shadow-lg border border-white/10">
              <Star className="w-10 h-10 text-yellow-400 mb-2" />
              <span className="text-4xl font-extrabold text-white">
                <AnimatedCounter to={200} />+
              </span>
              <span className="text-base text-white mt-1 font-medium">Events Organized</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-white/10 rounded-xl shadow-lg border border-white/10">
              <Handshake className="w-10 h-10 text-blue-400 mb-2" />
              <span className="text-4xl font-extrabold text-white">
                <AnimatedCounter to={50} />+
              </span>
              <span className="text-base text-white mt-1 font-medium">Community Partnerships</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-white/10 rounded-xl shadow-lg border border-white/10">
              <UserCheck className="w-10 h-10 text-green-400 mb-2" />
              <span className="text-4xl font-extrabold text-white">
                <AnimatedCounter to={3000} />+
              </span>
              <span className="text-base text-white mt-1 font-medium">Participants in Events</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-white/10 rounded-xl shadow-lg border border-white/10">
              <Briefcase className="w-10 h-10 text-purple-400 mb-2" />
              <span className="text-4xl font-extrabold text-white">
                <AnimatedCounter to={80} />+
              </span>
              <span className="text-base text-white mt-1 font-medium">Collaborations with Companies</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;