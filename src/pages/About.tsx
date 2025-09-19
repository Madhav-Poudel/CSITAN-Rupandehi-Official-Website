  const regionalCommittees = [
    { region: null, logo: centralLogo },
    { region: 'Rupandehi', logo: csitanLogo },
    { region: 'Chitwan', logo: chitwanLogo },
    { region: 'Purwanchal', logo: purwanchalLogo },
    { region: 'Pokhara', logo: pokharaLogo },
  ];
import csitan1 from '@/assets/csitan1.jpg';
import csitan2 from '@/assets/csitan2.jpg';
import csitan3 from '@/assets/csitan3.jpg';
import csitan4 from '@/assets/csitan4.jpg';
import csitan5 from '@/assets/csitan5.jpg';
import csitan6 from '@/assets/csitan6.jpg';
import csitan7 from '@/assets/csitan7.jpg';
import csitan8 from '@/assets/csitan8.jpg';
import csitan9 from '@/assets/csitan9.jpg';
import csitan10 from '@/assets/csitan10.jpg';
import csitan11 from '@/assets/csitan11.jpg';
import csitan12 from '@/assets/csitan12.jpg';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Lightbulb, Users, Trophy, Calendar } from 'lucide-react';
import csitanLogo from '@/assets/csitan-logo.png';
import centralLogo from '@/assets/Central.png';
import chitwanLogo from '@/assets/Chitwan (2).png';
import pokharaLogo from '@/assets/Pokhara.png';
import purwanchalLogo from '@/assets/Purwanchal.png';


const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);
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
      description: 'CSIT Association of Nepal-Butwal was established as a regional body of CSIT Association of Nepal.',
    },
    {
      year: '2018',
      title: 'Python Workshop',
      description: 'The very first event conducted to introduce students to Python programming and strengthen their foundation in coding.',
    },
    {
      year: '2019',
      title: 'Data Science & Machine Learning Workshop',
      description: 'An intensive workshop focused on data-driven insights, predictive modeling, and machine learning techniques.',
    },
    {
      year: '2020',
      title: 'Organizational Rebranding',
      description: 'CSIT Association of Nepal - Butwal was officially changed to CSIT Association of Nepal - Rupandehi, marking a new chapter of identity and representation.',
    },
    {
      year: '2020',
      title: 'Nepathya Overnight Hackathon',
      description: 'A creativity-driven overnight hackathon encouraging students to collaborate and build innovative tech solutions.',
    },
    {
      year: '2022',
      title: 'Nationwide Hackathon – Provathon 20.21',
      description: 'A large-scale national-level hackathon that brought together innovators from across the country to solve real-world problems.',
    },
    {
      year: '2023',
      title: 'Web Designing Essentials',
      description: 'An advanced continuation of the previous workshop, introducing modern tools, frameworks, and design trends.',
    },
    {
      year: '2024',
      title: 'Web Designing Essentials 2.0',
      description: 'Focused on React.js, helping participants build modern and interactive web applications.  ',
    },
    {
      year: '2025',
      title: 'CSITAN Networking Bootcamp',
      description: 'A 30-hour intensive bootcamp designed to enhance participants knowledge in networking concepts, protocols, and real-world configurations.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              <span className="text-white">About</span> <span className="text-primary">CSITAN Rupandehi</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of technology leaders through community, innovation, and professional development.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Thin line divider between Journey and Gallery */}
      {/* <div className="w-full flex justify-center items-center my-6">
        <hr className="w-2/3 border-t border-gray-400/30" style={{ borderWidth: '0.5px' }} />
      </div> */}

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
  <CardHeader className="text-center pb-2">
    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
      <Target className="h-8 w-8 text-primary-foreground" />
    </div>
    <CardTitle className="text-2xl">Mission</CardTitle>
  </CardHeader>
  <CardContent className="min-h-[200px] flex items-center justify-center pt-0">
    <p className="text-muted-foreground text-center leading-relaxed">
      To empower the next generation of technology leaders by fostering community, promoting innovation, and providing opportunities for professional growth in the CSIT field.
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
                <CardContent className="min-h-[110px] flex items-center justify-center">
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
                <CardContent className="min-h-[110px] flex items-center justify-center">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    To be the leading technology community in Rupandehi district, recognized for producing skilled professionals who contribute significantly to Nepal's digital transformation.
                  </p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A timeline of our growth, achievements, and milestones since our establishment.
            </p>
          </motion.div>

          <div className="relative">
            {/* Restore straight central timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary/80 md:bg-primary transform md:-translate-x-1/2 rounded-full shadow-lg"></div>

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
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 flex items-center justify-center z-10">
                  <Calendar className="h-2 w-2 text-primary-foreground" />
                </div>

                {/* Rope wrap effect at the connection point */}
                {/* Rope/thread connector removed as per user request */}

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
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

      {/* Gallery Section */}
      {/* Thin line divider above Gallery section */}
      <div className="w-full flex justify-center items-center mb-6">
        <hr className="w-2/3 border-t border-gray-400/30" style={{ borderWidth: '0.5px' }} />
      </div>
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Gallery</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Glimpses from our recent events and activities
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="contents content-visibility-auto" style={{ containIntrinsicSize: '160px' }}>
              {[csitan1, csitan2, csitan3, csitan4, csitan5, csitan6, csitan7, csitan8, csitan9, csitan10, csitan11, csitan12].map((img, idx) => (
                <GalleryImage key={idx} src={img} alt={`CSITAN Event ${idx + 1}`} idx={idx} />
              ))}
            </div>

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
            <h2 className="text-3xl font-bold mb-4 text-center">
              <span className="text-white">Our</span>{" "}
              <span className="text-[#CF4546]">Regional Committees</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               CSITAN operates through 5 regional committees across Nepal, each serving their 
              local computer science and IT communities with dedication and excellence.
            </p>
          </motion.div>
          <div className="flex justify-center">
            <div className="w-full max-w-5xl rounded-3xl border-2 border-primary/60 bg-gradient-to-br from-[#1FADE4]/10 to-[#CF4546]/10 shadow-2xl p-4 sm:p-8 md:p-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8 justify-center items-center">
                {regionalCommittees.map((committee, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center w-full"
                  >
                    <div className={`rounded-[32px] border-2 border-primary bg-white shadow-xl flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 mb-2 transition-transform hover:scale-105 ring-2 ring-primary/20${idx === 0 ? ' -mt-3' : ''}`}> 
                      <img src={committee.logo} alt="Regional Committee Logo" className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain drop-shadow-lg" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-white text-center mt-1">CSIT Association of Nepal</span>
                    {committee.region && (
                      <span className="text-xs sm:text-sm font-semibold text-white text-center mt-1">{committee.region}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Blurred skeleton loader for gallery images
function GalleryImage({ src, alt, idx }: { src: string; alt: string; idx: number }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white/10 relative">
      {!loaded && (
        <div className="absolute inset-0 w-full h-full bg-gray-300 animate-pulse blur-sm" />
      )}
      <img
        src={src}
        alt={alt}
        className={`object-cover w-full h-32 sm:h-36 md:h-40 transition-transform duration-300 hover:scale-105 ${loaded ? '' : 'opacity-0'}`}
        loading="lazy"
        decoding="async"
        fetchPriority={idx < 4 ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
export default About;