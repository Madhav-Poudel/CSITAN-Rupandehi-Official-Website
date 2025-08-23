import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock, ExternalLink } from 'lucide-react';

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
      image: '🎯',
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
      image: '💻',
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
      image: '🚀',
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'AI/ML Workshop Series',
      date: 'February 10-12, 2024',
      location: 'Virtual Event',
      type: 'Workshop',
      attendees: 200,
      description: 'Three-day virtual workshop series on Artificial Intelligence and Machine Learning fundamentals.',
      image: '🤖',
      highlights: ['250+ participants', 'Industry expert speakers', 'Hands-on projects'],
    },
    {
      id: 5,
      title: 'Tech Career Fair 2023',
      date: 'December 15, 2023',
      location: 'Bhairahawa Multiple Campus',
      type: 'Career Fair',
      attendees: 500,
      description: 'Major career fair connecting students with leading technology companies.',
      image: '💼',
      highlights: ['25+ companies', '150+ job offers', 'Networking sessions'],
    },
    {
      id: 6,
      title: 'Cybersecurity Awareness Workshop',
      date: 'November 8, 2023',
      location: 'Butwal Multiple Campus',
      type: 'Workshop',
      attendees: 100,
      description: 'Educational workshop on cybersecurity best practices and threat awareness.',
      image: '🔒',
      highlights: ['Security experts', 'Practical demonstrations', 'Certificate provided'],
    },
    {
      id: 7,
      title: 'Mobile App Development Contest',
      date: 'October 20-22, 2023',
      location: 'Lumbini City College',
      type: 'Competition',
      attendees: 80,
      description: '3-day mobile app development competition with prizes for best apps.',
      image: '📱',
      highlights: ['15+ teams', 'NPR 50,000 prize pool', 'Industry judges'],
    },
    {
      id: 8,
      title: 'Web Development Bootcamp',
      date: 'September 5-7, 2023',
      location: 'Nepathya College',
      type: 'Workshop',
      attendees: 75,
      description: 'Comprehensive bootcamp covering full-stack web development.',
      image: '🌐',
      highlights: ['Full-stack curriculum', 'Project-based learning', 'Mentor support'],
    },
    {
      id: 9,
      title: 'Tech Talk: Future of Computing',
      date: 'August 18, 2023',
      location: 'Virtual Event',
      type: 'Seminar',
      attendees: 150,
      description: 'Inspiring talk about emerging technologies and future computing trends.',
      image: '🔮',
      highlights: ['Renowned speaker', 'Q&A session', 'Recording available'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Events & <span className="text-primary">Activities</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join our exciting events designed to enhance your technical skills, expand your network, and advance your career in technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              Don't miss out on these exciting upcoming events. Register now to secure your spot!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {event.type}
                      </Badge>
                      <span className="text-4xl">{event.image}</span>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      Expected: {event.attendees} participants
                    </div>
                    <Button className="w-full mt-4 bg-primary hover:bg-secondary">
                      Register Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Past Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Want to Organize an Event?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Have an idea for a tech event or workshop? We'd love to collaborate with you to make it happen.
            </p>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;