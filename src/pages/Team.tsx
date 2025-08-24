
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Facebook, Linkedin, Twitter, Crown, Users, GraduationCap } from 'lucide-react';
import csitanLogo from '@/assets/csitan-logo.png';
import {
  presidentPhoto,
  vicePresidentAayush,
  vicePresidentLaxmi,
  treasurerPhoto,
  secretaryPhoto,
  jointTreasurerSmriti,
  jointTreasurerJeevan,
  executiveAadarsh,
  executiveRomars,
  executiveSupriya,
  executiveSimran,
  executiveElish,
  executiveGovinda,
  executiveSuraj,
} from '@/assets/teamMemberImages';

const Team = () => {
  // Executive Members
  // Executive structure: 1 President, 2 Vice Presidents, 1 Treasurer, 1 Secretary, 7 Executive Members
  const executiveMembers = [
    { name: 'Suhan Shrestha', post: 'Executive Member', social: { facebook: '#', linkedin: '#', twitter: '#' }, photo: executiveAadarsh },
    { name: 'Aadarsh Paudel', post: 'Executive Member', social: { facebook: '#', linkedin: '#', twitter: '#' }, photo: executiveAadarsh },
    { name: 'Romars Bhusal', post: 'Executive Member', social: { facebook: '#', linkedin: '#', twitter: '#' }, photo: executiveRomars },
    { name: 'Supriya Shrestha', post: 'Executive Member', social: { facebook: '#', linkedin: '#', twitter: '#' }, photo: executiveSupriya },
    { name: 'Simran Pokhrel', post: 'Executive Member', social: { facebook: '#', linkedin: '#', twitter: '#' }, photo: executiveSimran },
    { name: 'Elish Neupane', post: 'Executive Member', social: { facebook: '#', linkedin: '#', twitter: '#' }, photo: executiveElish },
    { name: 'Govinda Sagar Bhusal', post: 'Executive Member', social: { facebook: '#', linkedin: '#', twitter: '#' }, photo: executiveGovinda },
    { name: 'Suraj Agrahari', post: 'Executive Member', social: { facebook: '#', linkedin: '#', twitter: '#' }, photo: executiveSuraj },
  ];

  // Top officers
  const president = { name: 'Madhav Poudel', post: 'President', social: { facebook: '#', linkedin: '#', twitter: '#' } };
  const vicePresidents = [
    { name: 'Laxmi Khanal', post: 'Vice President', social: { facebook: '#', linkedin: '#', twitter: '#' }, photo: vicePresidentLaxmi },
    { name: 'Aayush Chapagain', post: 'Vice President', social: { facebook: '#', linkedin: '#', twitter: '#' }, photo: vicePresidentAayush },
  ];
  const treasurer = { name: 'Nirmal Kharal', post: 'Treasurer', social: { facebook: '#', linkedin: '#', twitter: '#' }, photo: treasurerPhoto };
  const secretary = { name: 'Kalpit Nepal', post: 'Secretary', social: { facebook: '#', linkedin: '#', twitter: '#' }, photo: secretaryPhoto };

  // Senior Members
  // 2 Joint Secretaries
  const jointSecretaries = [
    { name: 'Smiriti Neupane', post: 'Joint Secretary', social: { facebook: '#', linkedin: '#', twitter: '#' }, photo: jointTreasurerSmriti },
    { name: 'Jeevan Ghimire', post: 'Joint Secretary', social: { facebook: '#', linkedin: '#', twitter: '#' }, photo: jointTreasurerJeevan },
  ];

  // College Representatives
  const collegeRepresentatives = {
    'Butwal Multiple Campus': [
      'Nischal Panthi',
      'Rupesh Kharal',
      'Suchana Bhandari',
      'Swikriti A.C',
    ],
    'Lumbini City College': [
      'Smarika Gyawali',
      'Trishan Shrestha',
      'Anjana Aryal',
    ],
    'Nepathya College': [
      'Gaurav Poudel',
    ],
    'Bhairahawa Multiple Campus': [
      'Anshuya Aryal',
      'Aashika Bhandari',
      'Saroj Poudel',
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
          <div className="flex justify-center mb-4">
            {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className={
                      member.post === 'President'
                        ? 'w-20 h-20 rounded-full object-cover object-center border-2 border-primary bg-white scale-100'
                        : 'w-28 h-28 rounded-full object-cover object-center border-2 border-primary bg-white scale-100'
                    }
                  />
            ) : (
              <div className={
                member.post === 'President'
                  ? 'w-20 h-20 rounded-full flex items-center justify-center bg-muted text-xl font-bold border-2 border-primary'
                  : 'w-28 h-28 rounded-full flex items-center justify-center bg-muted text-xl font-bold border-2 border-primary'
              }>
                {member.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
            )}
          </div>
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

          {/* President */}
          <div className="grid grid-cols-1 max-w-md mx-auto mb-8">
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow p-6">
              <img src={presidentPhoto} alt="President" className="w-48 h-48 rounded-full object-cover border-2 border-primary mb-4" />
              <div className="font-bold text-2xl mb-1">{president.name}</div>
              <Badge variant="secondary" className="mb-2 text-lg py-1 px-3">{president.post}</Badge>
              <div className="flex justify-center space-x-4 mt-3">
                <a href={president.social.facebook} className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-7 w-7" />
                </a>
                <a href={president.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-7 w-7" />
                </a>
                <a href={president.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>

          {/* 2 VPs + Treasurer */}
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-8xl mx-auto mb-8 gap-12">
            <MemberCard member={vicePresidents[0]} index={0} />
            <MemberCard member={vicePresidents[1]} index={1} />
            <MemberCard member={treasurer} index={2} />
          </div>

          {/* Secretary + 2 Joint Secretaries */}
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-8xl mx-auto mb-8 gap-12">
            <MemberCard member={secretary} index={0} />
            <MemberCard member={jointSecretaries[0]} index={1} />
            <MemberCard member={jointSecretaries[1]} index={2} />
          </div>

          {/* Executive Members, 3 per row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executiveMembers.map((member, index) => (
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

          {/* Custom grid order for CRs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First row: Butwal Multiple Campus, Bhairahawa Multiple Campus */}
            {[['Butwal Multiple Campus', collegeRepresentatives['Butwal Multiple Campus']],
              ['Bhairahawa Multiple Campus', collegeRepresentatives['Bhairahawa Multiple Campus']]].map(([college, members], index) => (
              <motion.div
                key={college as string}
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
                      {Array.isArray(members) && members.map((member, idx) => (
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
            {/* Second row: Lumbini City College, Nepathya College (Nepathya smaller) */}
            {[['Lumbini City College', collegeRepresentatives['Lumbini City College']],
              ['Nepathya College', collegeRepresentatives['Nepathya College']]].map(([college, members], index) => (
              <motion.div
                key={college as string}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 2) * 0.1 }}
              >
                <Card className={`h-full ${college === 'Nepathya College' ? 'md:h-40' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-xl text-center text-primary">{college}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {Array.isArray(members) && members.map((member, idx) => (
                        <motion.li
                          key={member}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: ((index + 2) * 0.1) + (idx * 0.05) }}
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
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              href="https://forms.gle/RGu9fdCXbTbCJPP57"
              target="_blank"
              rel="noopener noreferrer"
            >
              Be a General Member
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
