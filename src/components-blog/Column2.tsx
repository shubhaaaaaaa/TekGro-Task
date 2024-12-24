import { Accordion, AccordionSummary, AccordionDetails, Avatar, Button, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';
import blogImage from '../assets/images/blog.jpg'
import {
    ArrowForwardOutlined as ArrowForwardIcon,
    FavoriteBorder as LikeIcon,
    CommentOutlined as CommentIcon
  } from "@mui/icons-material";

const Column2 = () => {
  return (
    <div className="p-6 space-y-6 w-full">
      {/* Author Section */}
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="author-profile"
          className="rounded-full w-8 h-8"
        />
        <div>
          <h3 className="font-semibold text-sm">Jane Doe</h3>
          <p className="text-xs text-gray-500">Cybersecurity Writer</p>
          <p className="text-xs text-gray-500">Posted on -- 4 min read</p>
        </div>
      </div>
      <hr className="border-gray-300 my-4" />

      {/* Article Title and Intro */}
      <div className="p-4 mb-6">
        <h2 className="text-lg font-bold mb-4 text-[#1a75bb]">
          Introduction: The Rise Of AI In Cybersecurity
        </h2>
        <p className="text-sm text-gray-700">
          In an era where digital transformation shapes the way we live, work,
          and connect, cybersecurity has emerged as a critical priority. The
          proliferation of sophisticated cyber threats—from ransomware and
          phishing to state-sponsored attacks—has pushed traditional defenses to
          their limits. To counter these evolving challenges, artificial
          intelligence (AI) has risen as a game-changing force in the
          cybersecurity domain.
          <br />
          <br />
          AI offers advanced capabilities that extend beyond human capacity,
          enabling organizations to identify, prevent, and respond to threats
          with unprecedented speed and precision. By leveraging machine
          learning, natural language processing, and behavioral analytics,
          AI-powered tools can analyze vast amounts of data, detect anomalies,
          and predict potential vulnerabilities before they are exploited.
          <br />
          <br />
          The rise of AI in cybersecurity is not merely a trend but a necessary
          evolution. As attackers themselves adopt AI to enhance their
          strategies, defenders must harness the power of this technology to
          stay ahead in an ever-changing threat landscape.
          <br />
          <br />
          This introduction explores the transformative impact of AI on
          cybersecurity, highlighting its benefits, challenges, and the road
          ahead for building a safer digital ecosystem.
        </p>
      </div>

      {/* Advertisement Section (dcf0ff background) */}
      <div className="bg-[#dcf0ff] p-4 rounded-lg shadow-md mb-6">
        <h3 className="font-semibold text-gray-800">
          Discover How Our Advanced Cybersecurity Solutions Safeguard Your
          Business 24/7
        </h3>
        <ul className="text-xs text-gray-700 mt-2">
          <li>• Rety-Tirre Threat Detection</li>
          <li>• Automated Risk Mitigation</li>
          <li>• Easy Integration with Existing Systems</li>
        </ul>
        <button className="bg-[#1a75bb] text-white px-6 py-3 rounded-lg mt-4 hover:bg-[#39cf2b]">
          Explore Now
        </button>
      </div>

      {/* AI's Role In Threat Detection And Prevention */}
      <div className="space-y-4 mb-6">
        <h3 className="text-lg font-bold text-[#1a75bb]">
          AI's Role In Threat Detection And Prevention
        </h3>
        <p className="text-sm text-gray-700">
          The rapid evolution of cyber threats has made traditional security
          methods insufficient in addressing modern challenges. Threat actors
          are deploying increasingly sophisticated techniques, making it
          essential for organizations to adopt proactive and intelligent
          solutions. Artificial intelligence (AI) has emerged as a
          transformative tool in both threat detection and prevention, providing
          capabilities that far exceed human limitations.
          <br />
          <br />
          <strong>1. Threat Detection</strong>
          <br />
          • AI enhances threat detection by analyzing vast amounts of data in
          real time, identifying patterns and anomalies that signal potential
          risks.
          <br />
          • Behavioral Analysis: Machine learning models can establish baseline
          behavior for users, devices, and networks. Any deviation from this
          norm—such as unusual login locations or data transfers—triggers
          alerts.
          <br />
          • Advanced Pattern Recognition: AI-powered systems can detect subtle
          indicators of advanced persistent threats (APTs) or zero-day
          vulnerabilities that might go unnoticed by traditional methods.
          <br />
          • Automated Log Analysis: Instead of manually sifting through logs, AI
          processes them at scale, spotting irregularities or correlations
          indicative of a breach.
          <br />
          <br />
          <strong>2. Automated Risk Mitigation</strong>
          <br />
          • Beyond detection, AI actively prevents attacks by predicting
          vulnerabilities and neutralizing threats before they cause harm.
          <br />
          • Predictive Analytics: By analyzing historical data and emerging
          threat intelligence, AI forecasts potential attack vectors, enabling
          organizations to reinforce defenses preemptively.
          <br />
          • Automated Incident Response: AI systems can isolate infected
          endpoints, block malicious IPs, and implement countermeasures without
          requiring human intervention.
          <br />
          • Real-Time Updates: AI ensures that systems remain up-to-date against
          the latest threats by dynamically adapting its algorithms and updating
          threat databases.
          <br />
          <br />
          <strong>3. Easy Integration With Existing Systems</strong>
          <br />
          • Phishing Detection: AI tools analyze email content, sender behavior,
          and metadata to identify and block phishing attempts.
          <br />
          • Malware Identification: AI-powered antivirus programs use deep
          learning to recognize both known and unknown malware based on their
          behavior rather than signatures.
          <br />• Fraud Prevention: In financial systems, AI detects unusual
          transaction patterns that could indicate fraud.
        </p>
      </div>

      {/* Advertisement Section (Black background) */}
      <div className="bg-black text-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="font-semibold">Don't Miss Out on the AI Revolution</h3>
        <p className="text-xs">
          Build your Chatbot now and stay ahead of the competition.
        </p>
        <button className="bg-[#1a75bb] text-white px-6 py-3 rounded-lg mt-4 hover:bg-[#39cf2b]">
          Connect Now
        </button>
      </div>

      {/* Automating Incident Response with AI */}
      <div className="space-y-4 mb-6">
        <h3 className="text-lg font-bold text-[#1a75bb]">
          Automating Incident Response With AI
        </h3>
        <p className="text-sm text-gray-700">
          Artificial intelligence (AI) is transforming incident response by
          enabling organizations to address cyber threats faster, more
          efficiently, and with greater precision. By automating key aspects of
          the response process, AI reduces reaction times, minimizes human
          error, and ensures consistency across incidents. It can isolate
          affected systems, conduct cause analyses, and execute pre-defined
          response playbooks in real-time, all while integrating threat
          intelligence to adapt to emerging risks.
          <br />
          <br />
          Applications range from phishing mitigation, where AI identifies and
          removes malicious emails, to real-time vulnerability assessments.
          However, challenges like over-reliance on automation or inaccurate
          system tuning can pose risks. A balanced approach that combines AI's
          capabilities with human oversight ensures a robust and effective
          incident response strategy.
        </p>
      </div>

      {/* AI-Driven Security Automation: A Double-Edged Sword? */}
      <div className="space-y-4 mb-6">
        <h3 className="text-lg font-bold text-[#1a75bb]">
          AI-Driven Security Automation: A Double-Edged Sword?
        </h3>
        <p className="text-sm text-gray-700">
          In an era where cyber threats are becoming increasingly sophisticated,
          the development and adoption of advanced tools for cybersecurity is
          not just an option but a necessity. The discussed tool leverages
          cutting-edge technologies, such as artificial intelligence and
          real-time threat analysis, to provide proactive and adaptive defenses
          against evolving cyber threats.
          <br />
          <br />
          As organizations and individuals continue to navigate a digital-first
          world, tools like this offer unparalleled capabilities to protect
          sensitive information, ensure business continuity, and foster trust in
          technology. However, their effectiveness will depend on their
          continuous evolution, ethical application, and integration with human
          expertise.
          <br />
          <br />
          Looking forward, this tool represents more than just a defense
          mechanism; it is a testament to the transformative power of innovation
          in securing the future of our interconnected world. By staying ahead
          of adversaries and embracing such advancements, we can collectively
          build a safer digital ecosystem for generations to come.
        </p>
      </div>

      {/* Another Advertisement Section (dcf0ff) */}
      <div className="bg-[#dcf0ff] p-4 rounded-lg shadow-md mb-6">
        <h3 className="font-semibold text-gray-800">
          Find The Right Tech Fit—Schedule Your Free Consultation
        </h3>
        <ul className="text-xs text-gray-700 mt-2">
          <li>• SEO - Unlock more SEO traffic. See real results.</li>
          <li>
            • Content Marketing - Our team creates epic content that will get
            shared, get links, and attract traffic.
          </li>
          <li>• Paid Media - Effective paid strategies with clear ROI.</li>
        </ul>
        <button className="bg-[#1a75bb] text-white px-6 py-3 rounded-lg mt-4 hover:bg-[#39cf2b]">
          Book A Call
        </button>
          </div>
          

          {/* FAQ section  */}
          <div className="space-y-4 mb-6">
        <Typography variant="h6" color="primary">
          Frequently Asked Questions
        </Typography>
        <div className="space-y-2">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2" color="textSecondary">
                What is AI's role in cybersecurity?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                AI plays a key role in enhancing threat detection, incident response, and automating processes to improve security defenses.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className="border-t border-gray-200 mt-2"></div>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="body2" color="textSecondary">
                How can AI enhance threat intelligence?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                AI enhances threat intelligence by processing large datasets to predict potential risks and provide more accurate threat analysis.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className="border-t border-gray-200 mt-2"></div>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography variant="body2" color="textSecondary">
                What are the benefits of AI in incident response?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                AI improves incident response by enabling faster detection, response, and automation, minimizing human error and downtime.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      {/* Was this article helpful? Section */}
      <div className="mb-6">
        <Typography variant="h6" color="primary" className="mb-2">
          Was this article helpful?
        </Typography>
        <div className="flex justify-between space-x-2 border-2 rounded-md py-5 my-8">
          <Button className="text-xl">😄</Button>
          <Button className="text-xl">👍</Button>
          <Button className="text-xl">😐</Button>
          <Button className="text-xl">👎</Button>
          <Button className="text-xl">😡</Button>
        </div>
      </div>

      {/* Comments Section */}
    <div className="mb-6">
    <Typography variant="h6" color="primary" className="mb-6">
    Comments
  </Typography>
  <TableContainer component={Paper}>
    <Table>
      <TableBody>
        {/* Comment Row 1 */}
        <TableRow>
          <TableCell>
            <Avatar alt="Jane Doe" src={blogImage} />
          </TableCell>
          <TableCell>
            <Typography variant="body2" className="font-semibold" style={{ fontSize: '0.875rem' }}>
              Jane Doe
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body2" color="textSecondary" style={{ fontSize: '0.75rem' }}>
              Dec 12, 2024
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ fontSize: '0.875rem' }}>
              This article is really insightful! AI in cybersecurity is definitely the way forward.
            </Typography>
            <div className="flex space-x-4 mt-2">
              <ThumbUpIcon fontSize="small" className="ml-2" />
              <ReplyIcon fontSize="small" className="ml-2" />
            </div>
          </TableCell>
        </TableRow>

        {/* Comment Row 2 */}
        <TableRow>
          <TableCell>
            <Avatar alt="John Smith" src={blogImage} />
          </TableCell>
          <TableCell>
            <Typography variant="body2" className="font-semibold" style={{ fontSize: '0.875rem' }}>
              John Smith
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body2" color="textSecondary" style={{ fontSize: '0.75rem' }}>
              Dec 12, 2024
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ fontSize: '0.875rem' }}>
              Great read! I love the in-depth explanation on how AI can be used for automated risk mitigation.
            </Typography>
            <div className="flex space-x-4 mt-2">
              <ThumbUpIcon fontSize="small" className="ml-2" />
              <ReplyIcon fontSize="small" className="ml-2" />
            </div>
          </TableCell>
        </TableRow>

        {/* Comment Row 3 */}
        <TableRow>
          <TableCell>
            <Avatar alt="Alice Johnson" src={blogImage} />
          </TableCell>
          <TableCell>
            <Typography variant="body2" className="font-semibold" style={{ fontSize: '0.875rem' }}>
              Alice Johnson
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body2" color="textSecondary" style={{ fontSize: '0.75rem' }}>
              Dec 12, 2024
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ fontSize: '0.875rem' }}>
              This really helped clarify how AI could enhance threat intelligence. Thanks for sharing!
            </Typography>
            <div className="flex space-x-4 mt-2">
              <ThumbUpIcon fontSize="small" className="ml-2" />
              <ReplyIcon fontSize="small" className="ml-2" />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
    </div>

{/* You Might Also Like Section */}
<div className="space-y-4">
  <Typography variant="h6" color="primary" className="mb-4 text-sm">
    Recommended Posts
  </Typography>
  <div className="grid grid-cols-2 gap-6">
    <div className="rounded-lg shadow-lg bg-[#e3effb]">
      <div
        className="h-32 bg-cover bg-center rounded-t-lg"
        style={{
          backgroundImage: `url(${blogImage})`,
        }}
      ></div>
      <div className="px-4 py-2">
        <h3 className="text-black text-sm font-semibold my-2">
          The Untapped Power of Email Signatures in Digital Marketing
        </h3>
        <div className="flex items-center justify-between text-xs text-gray-500 my-2">
          <span>Posted by Noah Smith</span>
          <div className="flex items-center gap-1">
            <LikeIcon className="text-[#1a75bb] text-xs" />
            <span className="text-xs">45</span>
            <CommentIcon className="text-[#1a75bb] text-xs" />
            <span className="text-xs">12</span>
          </div>
        </div>
        <p className="text-xs text-gray-600 mb-2">
          Power of Email Signatures in Digital Marketing. Description of the untapped potential of email signatures.
        </p>
        <div className="flex items-center gap-1 text-[#1a75bb] font-medium text-xs">
          <span className="hover:underline cursor-pointer">Learn More</span>
          <ArrowForwardIcon className="text-xs" />
        </div>
      </div>
    </div>

    <div className="rounded-lg shadow-lg bg-[#e3effb]">
      <div
        className="h-32 bg-cover bg-center rounded-t-lg"
        style={{
          backgroundImage: `url(${blogImage})`,
        }}
      ></div>
      <div className="px-4 py-2">
        <h3 className="text-black text-sm font-semibold my-2">
          The Untapped Power of Email Signatures in Digital Marketing
        </h3>
        <div className="flex items-center justify-between text-xs text-gray-500 my-2">
          <span>Posted by Noah Smith</span>
          <div className="flex items-center gap-1">
            <LikeIcon className="text-[#1a75bb] text-xs" />
            <span className="text-xs">45</span>
            <CommentIcon className="text-[#1a75bb] text-xs" />
            <span className="text-xs">12</span>
          </div>
        </div>
        <p className="text-xs text-gray-600 mb-2">
          Power of Email Signatures in Digital Marketing. Description of the untapped potential of email signatures.
        </p>
        <div className="flex items-center gap-1 text-[#1a75bb] font-medium text-xs">
          <span className="hover:underline cursor-pointer">Learn More</span>
          <ArrowForwardIcon className="text-xs" />
        </div>
      </div>
    </div>

  </div>
</div>





    </div>
  );
};

export default Column2;
