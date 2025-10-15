import { useState, useEffect, useRef, type JSX } from "react";
import {
    Github,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ExternalLink,
    Code2,
    ArrowRight,
    Star,
    Zap,
    Terminal,
    Cpu,
    Database,
    Cloud,
    TrendingUp,
} from "lucide-react";
import { portfolioData } from "./data";

export default function Portfolio() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeSection, setActiveSection] = useState("home");
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const data = portfolioData;

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        document
            .getElementById(sectionId)
            ?.scrollIntoView({ behavior: "smooth" });
    };

    const SkillIcon = ({ category }: { category: string }) => {
        const icons: Record<string, JSX.Element> = {
            languages: <Cpu className="w-5 h-5" />,
            webBackend: <Code2 className="w-5 h-5" />,
            databases: <Database className="w-5 h-5" />,
            devops: <Cloud className="w-5 h-5" />,
            algorithms: <TrendingUp className="w-5 h-5" />,
        };
        return icons[category] || <Code2 className="w-5 h-5" />;
    };

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Enhanced gradient background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute size-96 bg-cyan-500/20 rounded-full blur-[120px] transition-all duration-1000"
                    style={{
                        left: `${mousePosition.x - 192}px`,
                        top: `${mousePosition.y - 192}px`,
                    }}
                />
                <div className="absolute top-1/4 -right-48 size-96 bg-purple-500/15 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute -bottom-32 -left-32 size-96 bg-blue-500/10 rounded-full blur-[120px]" />

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
            </div>

            {/* Enhanced floating nav */}
            <nav className="fixed top-8 start-1/2 -translate-x-1/2 z-50">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 shadow-2xl shadow-cyan-500/10">
                    <div className="flex gap-8 items-center">
                        {[
                            "home",
                            "experience",
                            "projects",
                            "skills",
                            "contact",
                        ].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`text-sm font-medium transition-all duration-300 ${
                                    activeSection === item
                                        ? "text-cyan-400 scale-110 bg-cyan-400/10 px-4 py-1 rounded-full"
                                        : "text-white/60 hover:text-white hover:scale-105"
                                }`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Enhanced Hero Section */}
            <section
                id="home"
                ref={heroRef}
                className="relative min-h-screen flex items-center justify-center px-6 pt-20"
            >
                {/* Availability badge */}
                <div className="fixed z-50 hidden md:inline-flex top-8 right-4 items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur-sm border border-green-400/30 rounded-full mb-8 animate-pulse">
                    <div className="size-3 bg-green-400 rounded-full animate-ping" />
                    <span className="text-sm font-medium text-green-400">
                        🚀 Available for roles & projects
                    </span>
                </div>
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    {/* Main headline */}
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter">
                            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                                {data.personal.name.split(" ")[0]}
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                {data.personal.name.split(" ")[1]}
                            </span>
                        </h1>

                        <div className="inline-block">
                            <p className="text-2xl md:text-4xl font-light text-white/80 mb-4">
                                {data.personal.title}
                            </p>
                            <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                        </div>
                    </div>

                    {/* Enhanced summary */}
                    <p className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto my-12 leading-relaxed font-light">
                        {data.personal.summary}
                    </p>

                    {/* Impact-focused stats */}
                    {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
                        {data.stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-cyan-500/30"
                            >
                                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                                    {stat.value}
                                </div>
                                <div className="text-xs md:text-sm text-white/60 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div> */}

                    {/* Enhanced CTA Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center mb-16">
                        <a
                            href={`mailto:${data.personal.email}`}
                            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 hover:gap-4"
                        >
                            <Mail className="size-5" />
                            Let's Build Something Amazing
                            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href={data.personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                        >
                            <Github className="size-5" />
                            Explore My work
                        </a>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/40 text-sm">
                        <div className="flex items-center gap-3">
                            <MapPin className="size-4" />
                            {data.personal.location}
                        </div>
                        {/* <div className="flex items-center gap-3">
                            <Trophy className="size-4 text-yellow-400" />
                            1st Place Hackathon Winner
                        </div> */}
                        {/* <div className="flex items-center gap-3">
                            <Users className="size-4 text-cyan-400" />
                            Team Leadership
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Enhanced Experience Section */}
            <section id="experience" className="relative py-32 px-6">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="p-3 bg-cyan-500/20 rounded-2xl">
                            <Terminal className="w-8 h-8 text-cyan-400" />
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                                Leadership & Impact
                            </h2>
                            <p className="text-white/60 mt-2">
                                Where vision meets execution
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {data.experience.map((exp, idx) => (
                            <div key={idx} className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 group-hover:scale-[1.02]">
                                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                                        <div className="flex-1">
                                            <h3 className="text-3xl font-bold text-white mb-2">
                                                {exp.role}
                                            </h3>
                                            <p className="text-xl text-cyan-400 font-semibold">
                                                {exp.company}
                                            </p>
                                            <p className="text-lg text-white/60">
                                                {exp.industry}
                                            </p>
                                        </div>
                                        <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-400 font-medium">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        {exp.highlights.map((highlight, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                                            >
                                                <div className="p-2 bg-cyan-500/20 rounded-lg">
                                                    <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                                </div>
                                                <p className="text-white/80 leading-relaxed">
                                                    {highlight}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-400 font-medium hover:bg-cyan-500/20 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Projects Section */}
            <section
                id="projects"
                className="relative py-32 px-6 bg-gradient-to-b from-transparent via-white/5 to-transparent"
            >
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="p-3 bg-purple-500/20 rounded-2xl">
                            <Code2 className="w-8 h-8 text-purple-400" />
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                                Innovation Showcase
                            </h2>
                            <p className="text-white/60 mt-2">
                                From concept to production
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {data.projects.map((project, idx) => (
                            <div key={idx} className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.02] h-full flex flex-col">
                                    {project.featured && (
                                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-3 shadow-lg">
                                            <Star className="w-5 h-5 text-black" />
                                        </div>
                                    )}

                                    <h3 className="text-3xl font-bold mb-3">
                                        {project.name}
                                    </h3>
                                    <p className="text-cyan-400 text-lg font-semibold mb-4">
                                        {project.tagline}
                                    </p>
                                    <p className="text-white/70 mb-6 leading-relaxed flex-1">
                                        {project.description}
                                    </p>

                                    {/* Enhanced Metrics */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        {project.metrics.map((metric, i) => (
                                            <div
                                                key={i}
                                                className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors group/metric"
                                            >
                                                <div className="text-2xl font-bold text-cyan-400 group-hover/metric:scale-110 transition-transform">
                                                    {metric.value}
                                                </div>
                                                <div className="text-sm text-white/50 font-medium">
                                                    {metric.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Enhanced Tech stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Enhanced Links */}
                                    <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:gap-3 font-semibold"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span className="text-sm">
                                                    Live Demo
                                                </span>
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-white/60 hover:text-white transition-all duration-300 hover:gap-3 font-semibold"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span className="text-sm">
                                                    Source Code
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Skills Section */}
            <section id="skills" className="relative py-32 px-6">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
                            Technical Arsenal
                        </h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            Mastering the tools and technologies that power
                            modern software development
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(data.skills).map(
                            ([category, skills]) => (
                                <div
                                    key={category}
                                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-cyan-500/30"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-cyan-500/20 rounded-lg">
                                            <SkillIcon category={category} />
                                        </div>
                                        <h3 className="text-xl font-bold text-cyan-400 capitalize">
                                            {category
                                                .replace(/([A-Z])/g, " $1")
                                                .trim()}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* Enhanced Contact Section */}
            <section id="contact" className="relative py-32 px-6">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-500/20 border border-cyan-500/30 rounded-full mb-8">
                        <div className="size-2 bg-cyan-400 rounded-full animate-pulse" />
                        <span className="text-cyan-400 font-medium">
                            Let's Connect
                        </span>
                    </div>

                    <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                        Ready to Build the Future?
                    </h2>
                    <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                        I'm currently available for challenging engineering
                        leadership roles, ambitious projects, and opportunities
                        to drive technical innovation. Let's create something
                        extraordinary together.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <a
                            href={`mailto:${data.personal.email}`}
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 hover:gap-4"
                        >
                            <Mail className="w-5 h-5" />
                            Start a Conversation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href={data.personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                        >
                            <Linkedin className="w-5 h-5" />
                            Professional Network
                        </a>
                    </div>

                    {/* Contact info with enhanced styling */}
                    <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                            <MapPin className="w-5 h-5 text-cyan-400" />
                            <span className="text-white/80">
                                {data.personal.location}
                            </span>
                        </div>
                        <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                            <Phone className="w-5 h-5 text-cyan-400" />
                            <span className="text-white/80">
                                {data.personal.phone}
                            </span>
                        </div>
                        <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                            <Mail className="w-5 h-5 text-cyan-400" />
                            <span className="text-white/80">Email</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Footer */}
            <footer className="relative border-t border-white/10 py-12 px-6 bg-gradient-to-t from-black to-transparent">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <div className="text-center lg:text-left">
                            <p className="text-white/60 text-lg">
                                © {new Date().getFullYear()}{" "}
                                {data.personal.name}
                            </p>
                            <p className="text-white/40 text-sm mt-2">
                                Building dependable, scalable software — one
                                project at a time.
                            </p>
                        </div>

                        <div className="flex gap-6">
                            <a
                                href={data.personal.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/40 hover:text-cyan-400 transition-colors p-3 hover:bg-white/5 rounded-xl"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href={data.personal.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/40 hover:text-cyan-400 transition-colors p-3 hover:bg-white/5 rounded-xl"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href={`mailto:${data.personal.email}`}
                                className="text-white/40 hover:text-cyan-400 transition-colors p-3 hover:bg-white/5 rounded-xl"
                            >
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div className="text-center mt-8 pt-6 border-t border-white/10">
                        <p className="text-white/30 text-sm">
                            {/* Designed & developed by {data.personal.name}  */}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
