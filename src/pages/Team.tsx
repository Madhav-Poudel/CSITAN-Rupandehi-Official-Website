import web from '@/assets/web.jpg';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Users, GraduationCap } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import csitanLogo from '@/assets/csitan-logo.png';
import teamss from '@/assets/teamss.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import {
  presidentPhoto,
  vicePresidentAayush,
  vicePresidentLaxmi,
  treasurerPhoto,
  secretaryPhoto,
  jointTreasurerSmriti,
  TeamPhoto,
  jointTreasurerJeevan,
  executiveAadarsh,
  executiveRomars,
  executiveSuhan,
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
    { name: 'Suhan Shrestha', post: 'Executive Member', social: { facebook: 'https://www.facebook.com/suhan.stha09', linkedin: 'https://www.linkedin.com/in/suhan-shrestha-9223b1247/', twitter: '#' }, photo: executiveSuhan },
    { name: 'Aadarsh Paudel', post: 'Executive Member', social: { facebook: 'https://www.facebook.com/aadarsh.paudel.5', linkedin: 'https://www.linkedin.com/in/adarsh-paudel-54284a302/', twitter: '#' }, photo: executiveAadarsh },
    { name: 'Romars Bhusal', post: 'Executive Member', social: { facebook: 'https://www.facebook.com/romars.bhusal', linkedin: 'https://www.linkedin.com/in/romars-bhusal-837240311/', twitter: '#' }, photo: executiveRomars },
    { name: 'Supriya Shrestha', post: 'Executive Member', social: { facebook: 'https://www.facebook.com/supriya.shrestha.277953', linkedin: 'https://www.linkedin.com/in/supriya-shrestha-5407aa310/', twitter: '#' }, photo: executiveSupriya },
    { name: 'Simran Pokhrel', post: 'Executive Member', social: { facebook: 'https://www.facebook.com/simran.pokhrel.761853', linkedin: 'https://www.linkedin.com/in/simran-pokhrel-b68b0b331/', twitter: '#' }, photo: executiveSimran },
    { name: 'Elish Neupane', post: 'Executive Member', social: { facebook: 'https://www.facebook.com/alish.neupane.16', linkedin: '#', twitter: '#' }, photo: executiveElish },
    { name: 'Govinda Sagar Bhusal', post: 'Executive Member', social: { facebook: 'https://www.facebook.com/aayush.bhusal.50', linkedin: 'https://www.linkedin.com/in/govinda-sagar-bhusal-3685362a8/', twitter: '#' }, photo: executiveGovinda },
    { name: 'Suraj Agrahari', post: 'Executive Member', social: { facebook: 'https://www.facebook.com/suraz.agrahari.2025', linkedin: 'https://www.linkedin.com/in/suraj-agrahari-982a272a9/', twitter: '#' }, photo: executiveSuraj },
  ];

  // Top officers
  const president = {
    name: 'Madhav Poudel',
    post: 'President',
    social: {
      facebook: 'https://www.facebook.com/madhavpoudel07',
      linkedin: 'https://www.linkedin.com/in/madhav-poudel-a711562a1/',
      github: 'https://github.com/Madhav-Poudel',
    }
  };
  const vicePresidents = [
    { name: 'Laxmi Khanal', post: 'Vice President', social: { facebook: '#', linkedin: 'https://www.linkedin.com/in/laxmi-khanal-154830283/', twitter: '#' }, photo: vicePresidentLaxmi },
    { name: 'Aayush Chapagain', post: 'Vice President', social: { facebook: 'https://www.facebook.com/facebook.aayushchapagain', linkedin: 'https://www.linkedin.com/in/aayushchapagain/', twitter: '#' }, photo: vicePresidentAayush },
  ];
  const treasurer = { name: 'Nirmal Kharal', post: 'Treasurer', social: { facebook: 'https://www.facebook.com/imnirmalkharal', linkedin: 'https://www.linkedin.com/in/kharalnirmal/', twitter: '#' }, photo: treasurerPhoto };
  const secretary = { name: 'Kalpit Nepal', post: 'Secretary', social: { facebook: 'https://www.facebook.com/kalpit.nepal.77', linkedin: 'https://www.linkedin.com/in/kalpit-nepal-0086aa331/', twitter: '#' }, photo: secretaryPhoto };

  // Senior Members
  // 2 Joint Secretaries
  const jointSecretaries = [
    { name: 'Smriti Neupane', post: 'Joint Secretary', social: { facebook: 'https://www.facebook.com/smirti.neupane.921', linkedin: 'https://www.linkedin.com/in/smriti-neupane01/', twitter: '#' }, photo: jointTreasurerSmriti },
    { name: 'Jeevan Ghimire', post: 'Joint Secretary', social: { facebook: 'https://www.facebook.com/imjeevanghimire', linkedin: 'https://www.linkedin.com/in/imjeevanghimire/', twitter: '#' }, photo: jointTreasurerJeevan },
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
  { name: 'Pratap Neupane', tenure: '2017-2018', isCharter: true },
  { name: 'Laxman Neupane', tenure: '2018-2019', isCharter: false },
  { name: 'Pradip Bhattarai', tenure: '2019-2020', isCharter: false },
  { name: 'Manoj Pokhrel', tenure: '2020-2021', isCharter: false },
  { name: 'Narayan Adhikari', tenure: '2021-2022', isCharter: false },
  { name: 'Laxman Kurmi', tenure: '2022-2023', isCharter: false },
  { name: 'Roshan K.C', tenure: '2023-2024', isCharter: false },
  { name: 'Kritima Khanal', tenure: '2024-2025', isCharter: false },
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
                draggable={false}
                onContextMenu={e => e.preventDefault()}
              />
            ) : (
              <div
                className={
                  member.post === 'President'
                    ? 'w-20 h-20 rounded-full flex items-center justify-center bg-muted text-xl font-bold border-2 border-primary'
                    : 'w-28 h-28 rounded-full flex items-center justify-center bg-muted text-xl font-bold border-2 border-primary'
                }
                draggable={false}
                onContextMenu={e => e.preventDefault()}
              >
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
            <a href={member.social.facebook || '#'} className="hover:scale-110 transition-transform" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="h-6 w-6 text-[#CF4546]" />
            </a>
            <a href={member.social.linkedin || '#'} className="hover:scale-110 transition-transform" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-6 w-6 text-[#CF4546]" />
            </a>
            <a href={member.social.github || '#'} className="hover:scale-110 transition-transform" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-6 w-6 text-[#CF4546]" />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      {/* Our Team Section with background and overlay (heading and description only) */}
      <section
        className="relative py-20"
      >
  {/* Background image with reduced opacity */}
  <div className="absolute inset-0 z-0" style={{backgroundImage: `url(${teamss})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5}} />
  {/* Full dark overlay for maximum readability */}
  <div className="absolute inset-0 z-10" style={{background: 'rgba(0,0,0,0.7)'}} />
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals who drive CSITAN Rupandehi forward with their passion, expertise, and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board Members Section with background and overlay */}
      <section className="relative py-20">
        {/* Background image with reduced opacity */}
        <div className="absolute inset-0 z-0" style={{backgroundImage: `url(${web})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5}} />
        {/* Full dark overlay for maximum readability */}
        <div className="absolute inset-0 z-10" style={{background: 'rgba(0,0,0,0.7)'}} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex items-center justify-center mb-8 mt-4">
            <Users className="h-14 w-14 text-primary drop-shadow-lg mr-4" />
            <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">Board Members</h2>
          </div>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl font-bold text-white text-center leading-snug drop-shadow mb-2">
              Meet the dedicated executive board of CSITAN Rupandehi (2082–2083)
            </p>
            <p className="text-lg md:text-xl text-white/90 text-center font-normal">
              United by vision, leadership, and teamwork, this board is committed to empowering students and strengthening the tech community across our region.
            </p>
          </div>

          {/* All Board Members in a single outlined rectangle box */}
          <div className="border-2 border-primary rounded-2xl p-8 bg-transparent mx-auto" style={{overflow: 'visible'}}>
            {/* President */}
            <div className="grid grid-cols-1 max-w-md mx-auto mb-8">
              <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <img
                  src={presidentPhoto}
                  alt="President"
                  className="w-48 h-48 rounded-full object-cover border-2 border-primary mb-4"
                  draggable={false}
                  onContextMenu={e => e.preventDefault()}
                />
                <div className="font-bold text-2xl mb-1 text-gray-900">{president.name}</div>
                <Badge variant="secondary" className="mb-2 text-lg py-1 px-3">{president.post}</Badge>
                <div className="flex justify-center space-x-4 mt-3">
                  <a href={president.social.facebook} className="hover:scale-110 transition-transform" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="h-7 w-7 text-[#CF4546]" />
                  </a>
                  <a href={president.social.linkedin} className="hover:scale-110 transition-transform" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-7 w-7 text-[#CF4546]" />
                  </a>
                  <a href={president.social.github} className="hover:scale-110 transition-transform" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-7 w-7 text-[#CF4546]" />
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
                <div className="flex flex-col items-center mb-2">
                  <span className="inline-block px-4 py-1 rounded-full bg-primary text-white font-semibold text-base shadow-lg mb-2 border-2 border-primary">Charter President</span>
                  <span className="block text-2xl font-bold text-primary mb-1">Pratap Neupane</span>
                  <span className="block text-sm text-muted-foreground">President Year: {pastPresidents[0].tenure}</span>
                </div>
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
                      <p className="text-sm text-muted-foreground">President Year: {president.tenure}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Colleges Covered by Our Regional Committee */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Colleges Covered by Our Regional Committee</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              CSIT Association of Nepal - Rupandehi actively connects and collaborates with four CSIT colleges within Rupandehi district, strengthening the IT community through partnership and engagement.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Butwal Multiple Campus', 'Bhairahawa Multiple Campus', 'Lumbini City College', 'Nepathya College'].map((college) => (
              <div key={college} className="border-2 border-primary rounded-xl py-8 px-4 bg-white/80 text-center text-lg font-semibold text-primary shadow-sm">
                {college}
              </div>
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
      <section
        className="py-20 relative overflow-hidden"
      >
        {/* Lazy loaded background image for better performance */}
        <img
          src={heroBg}
          alt="Our Team Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          loading="lazy"
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        />
  <div className="absolute inset-0" style={{ background: '#1FADE4CC', zIndex: 1 }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative" style={{ zIndex: 2 }}>
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
