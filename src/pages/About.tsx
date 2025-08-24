import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Lightbulb, Users, Trophy, Calendar } from 'lucide-react';
import csitanLogo from '@/assets/csitan-logo.png';

const About = () => {
  const objectives = [
    {
      icon: Users,
      title: 'Community Building',
      description: 'Foster a strong community of CSIT students and professionals in Rupandehi district.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Promote innovative thinking and technological advancement among members.',
    },
    {
      icon: Trophy,
      title: 'Professional Development',
      description: 'Provide opportunities for skill development and career advancement.',
    },
    {
      icon: Target,
      title: 'Industry Connection',
      description: 'Bridge the gap between academia and industry through networking events.',
    },
  ];

  const timeline = [
    {
      year: '2017',
      title: 'Foundation',
      description: 'CSITAN Rupandehi was established as a regional body of CSIT Association of Nepal.',
    },
    {
      year: '2018',
      title: 'First Annual Event',
      description: 'Successfully organized our first annual tech symposium with over 200 participants.',
    },
    {
      year: '2019',
      title: 'Expansion',
      description: 'Extended our reach to multiple colleges in Rupandehi district.',
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Adapted to virtual events during pandemic, maintaining community engagement.',
    },
    {
      year: '2021',
      title: 'Industry Partnerships',
      description: 'Established partnerships with leading tech companies for internship opportunities.',
    },
    {
      year: '2022',
      title: 'Hackathon Launch',
      description: 'Launched our first annual hackathon, attracting participants from across Nepal.',
    },
    {
      year: '2023',
      title: 'Alumni Network',
      description: 'Created a strong alumni network with members in top tech companies globally.',
    },
    {
      year: '2024',
      title: 'Future Vision',
      description: 'Continuing to innovate and expand our impact in the technology community.',
    },
  ];

  // Regional Committees Data
  const regionalCommittees = [
    { region: null, logo: csitanLogo },
    { region: 'Rupandehi', logo: csitanLogo },
    { region: 'Pokhara', logo: csitanLogo },
    { region: 'Purwanchal', logo: csitanLogo },
    { region: 'Chitwan', logo: csitanLogo },
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
              About <span className="text-primary">CSITAN Rupandehi</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of technology leaders through community, innovation, and professional development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    To empower CSIT students in Rupandehi district by providing a platform for learning, networking, and professional growth while fostering innovation and technological advancement.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    To be the leading technology community in Rupandehi district, recognized for producing skilled professionals who contribute significantly to Nepal's digital transformation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Excellence in Technology</li>
                    <li>• Collaborative Learning</li>
                    <li>• Professional Integrity</li>
                    <li>• Innovation & Creativity</li>
                    <li>• Community Service</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Objectives</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work towards achieving specific goals that benefit our community and the broader technology ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <motion.div
                  key={objective.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{objective.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{objective.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of our growth, achievements, and milestones since our establishment.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-0.5"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 flex items-center justify-center">
                  <Calendar className="h-2 w-2 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">{item.year}</span>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       {/* Regional Committees Section */}
      <section className="py-20 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Regional Committees</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               CSITAN operates through 5 regional committees across Nepal, each serving their 
              local computer science and IT communities with dedication and excellence.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 justify-items-center">
            {regionalCommittees.map((committee, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-card rounded-lg shadow flex items-center justify-center w-28 h-28 mb-1">
                  <img src={committee.logo} alt="Regional Committee Logo" className="w-20 h-20 object-contain" />
                </div>
                <span className="text-xs font-normal text-foreground text-center mt-0.5">CSIT Association of Nepal</span>
                {committee.region && (
                  <span className="text-xs font-normal text-foreground text-center mt-0.5">{committee.region}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;