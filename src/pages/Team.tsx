import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Facebook, Linkedin, Twitter, Crown, Users, GraduationCap } from 'lucide-react';

const Team = () => {
  // Executive Members
  const executiveMembers = [
    {
      name: 'Ramesh Sharma',
      post: 'President',
      photo: '👨‍💼',
      social: { facebook: '#', linkedin: '#', twitter: '#' },
    },
    {
      name: 'Sita Poudel',
      post: 'Vice President',
      photo: '👩‍💼',
      social: { facebook: '#', linkedin: '#', twitter: '#' },
    },
    {
      name: 'Anil Thapa',
      post: 'General Secretary',
      photo: '👨‍💻',
      social: { facebook: '#', linkedin: '#', twitter: '#' },
    },
    {
      name: 'Priya Gupta',
      post: 'Treasurer',
      photo: '👩‍💻',
      social: { facebook: '#', linkedin: '#', twitter: '#' },
    },
    {
      name: 'Rajesh Yadav',
      post: 'Technical Lead',
      photo: '👨‍🔬',
      social: { facebook: '#', linkedin: '#', twitter: '#' },
    },
    {
      name: 'Maya Shrestha',
      post: 'Event Coordinator',
      photo: '👩‍🎨',
      social: { facebook: '#', linkedin: '#', twitter: '#' },
    },
  ];

  // Senior Members
  const seniorMembers = [
    {
      name: 'Bikash Adhikari',
      post: 'Senior Advisor',
      photo: '👨‍🏫',
      social: { facebook: '#', linkedin: '#', twitter: '#' },
    },
    {
      name: 'Sunita Karki',
      post: 'Mentor',
      photo: '👩‍🏫',
      social: { facebook: '#', linkedin: '#', twitter: '#' },
    },
    {
      name: 'Deepak Pandey',
      post: 'Alumni Coordinator',
      photo: '👨‍🎓',
      social: { facebook: '#', linkedin: '#', twitter: '#' },
    },
    {
      name: 'Anita Bhandari',
      post: 'Research Head',
      photo: '👩‍🔬',
      social: { facebook: '#', linkedin: '#', twitter: '#' },
    },
  ];

  // College Representatives
  const collegeRepresentatives = {
    'Butwal Multiple Campus': [
      'Suresh Neupane',
      'Kamala Rijal',
      'Binod Sharma',
      'Roshani Thapa',
      'Naresh Kumar',
    ],
    'Lumbini City College': [
      'Ashok Paudel',
      'Sarita Ghimire',
      'Prakash Joshi',
      'Indira Kumari',
      'Ramesh Bhatta',
    ],
    'Nepathya College': [
      'Rajesh Maharjan',
      'Sangita Ale',
      'Umesh Pant',
      'Gita Sharma',
      'Mohan Khadka',
    ],
    'Bhairahawa Multiple Campus': [
      'Sandip Gautam',
      'Renu Aryal',
      'Dipendra Shah',
      'Sabina Regmi',
      'Govinda Prasad',
    ],
  };

  // Past Presidents
  const pastPresidents = [
    { name: 'Dr. Krishna Bahadur Thapa', tenure: '2017-2018', isCharter: true },
    { name: 'Anita Sharma Poudel', tenure: '2018-2019', isCharter: false },
    { name: 'Rajesh Kumar Yadav', tenure: '2019-2020', isCharter: false },
    { name: 'Sushma Adhikari', tenure: '2020-2021', isCharter: false },
    { name: 'Binod Prasad Sharma', tenure: '2021-2022', isCharter: false },
    { name: 'Kabita Gurung', tenure: '2022-2023', isCharter: false },
  ];

  const MemberCard = ({ member, index }: { member: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 text-center">
        <CardHeader>
          <div className="text-6xl mb-4">{member.photo}</div>
          <CardTitle className="text-xl">{member.name}</CardTitle>
          <Badge variant="secondary" className="mx-auto">
            {member.post}
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center space-x-3">
            <a href={member.social.facebook} className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

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
              Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals who drive CSITAN Rupandehi forward with their passion, expertise, and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Past Presidents - Charter President Highlight */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Crown className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Past Presidents</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Honoring the leaders who have guided our organization through its journey.
            </p>
          </motion.div>

          {/* Charter President Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="max-w-md mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-primary-foreground" />
                </div>
                <Badge className="mb-2 bg-primary">Charter President</Badge>
                <CardTitle className="text-xl">{pastPresidents[0].name}</CardTitle>
                <p className="text-sm text-muted-foreground">{pastPresidents[0].tenure}</p>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Other Past Presidents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastPresidents.slice(1).map((president, index) => (
              <motion.div
                key={president.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{president.name}</h3>
                    <p className="text-sm text-muted-foreground">{president.tenure}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Members */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Executive Members</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The executive team leading CSITAN Rupandehi with vision and dedication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveMembers.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Senior Members */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Senior Members</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced mentors providing guidance and support to our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seniorMembers.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* College Representatives */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">College Representatives (CRs)</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated representatives from partner colleges across Rupandehi district.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(collegeRepresentatives).map(([college, members], index) => (
              <motion.div
                key={college}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-center text-primary">{college}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {members.map((member, idx) => (
                        <motion.li
                          key={member}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                          className="flex items-center p-2 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-muted-foreground">{member}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <Users className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Are you passionate about technology and community building? We're always looking for dedicated individuals to join our team.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Involved
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
