import React, { useEffect } from "react";
import { SiLinux, SiUbuntu, SiDebian, SiArchlinux, SiFedora, SiQemu, SiNginx, SiJenkins, SiDocker, SiGit, SiGithub, SiPython, SiGo, SiRust, SiJavascript, SiNodedotjs
 } from "react-icons/si";

export default function Portofolio(): React.ReactElement {
  const TechStack: {Icon: React.ReactNode, name: string, link: string}[] = [
    // OS
    {Icon: <SiLinux size={100} className="m-auto mt-20 text-yellow-400 animate-pulse" />, name: "Linux", link: "https://www.linux.org/"},
    {Icon: <SiUbuntu size={100} className="m-auto mt-20 text-orange-600 animate-pulse" />, name: "Ubuntu", link: "https://ubuntu.com/"},
    {Icon: <SiArchlinux size={100} className="m-auto mt-20 text-blue-600 animate-pulse" />, name: "Arch Linux", link: "https://archlinux.org/"},
    {Icon: <SiDebian size={100} className="m-auto mt-20 text-red-600 animate-pulse" />, name: "Debian", link: "https://www.debian.org/"},
    {Icon: <SiFedora size={100} className="m-auto mt-20 text-blue-800 animate-pulse" />, name: "Fedora", link: "https://fedoraproject.org/"},
    {Icon: <SiQemu size={100} className="m-auto mt-20 text-red-500 animate-pulse" />, name: "QEMU", link: "https://www.qemu.org/"},
    {Icon: <SiNginx size={100} className="m-auto mt-20 text-green-600 animate-pulse" />, name: "Nginx", link: "https://nginx.org/"},
    // DevOps & Version Control
    {Icon: <SiDocker size={100} className="m-auto mt-20 text-blue-500 animate-pulse" />, name: "Docker", link: "https://www.docker.com/"},
    {Icon: <SiJenkins size={100} className="m-auto mt-20 text-red-700 animate-pulse" />, name: "Jenkins", link: "https://www.jenkins.io/"},
    {Icon: <SiGit size={100} className="m-auto mt-20 text-red-600 animate-pulse" />, name: "Git", link: "https://git-scm.com/"},
    {Icon: <SiGithub size={100} className="m-auto mt-20 text-gray-300 animate-pulse" />, name: "GitHub", link: "https://github.com/"},
    {Icon: <SiPython size={100} className="m-auto mt-20 text-blue-500 animate-pulse" />, name: "Python", link: "https://www.python.org/"},
    {Icon: <SiGo size={100} className="m-auto mt-20 text-cyan-500 animate-pulse" />, name: "Go", link: "https://golang.org/"},
    // Scripting & Programming
    {Icon: <svg className="m-auto mt-20 w-20 h-20 text-gray-400 animate-pulse" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="10" width="90" height="80" rx="5" stroke="currentColor" strokeWidth="2"/><line x1="15" y1="25" x2="85" y2="25" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="17" r="2" fill="currentColor"/><circle cx="22" cy="17" r="2" fill="currentColor"/><circle cx="32" cy="17" r="2" fill="currentColor"/><path d="M 20 45 L 30 55 L 20 65" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/><line x1="35" y1="55" x2="60" y2="55" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>, name: "Bash", link: "https://www.gnu.org/software/bash/"},
    {Icon: <SiRust size={100} className="m-auto mt-20 text-orange-700 animate-pulse" />, name: "Rust", link: "https://www.rust-lang.org/"},
    {Icon: <SiJavascript size={100} className="m-auto mt-20 text-yellow-400 animate-pulse" />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
    {Icon: <SiNodedotjs size={100} className="m-auto mt-20 text-green-600 animate-pulse" />, name: "Node.js", link: "https://nodejs.org/"},
    // AI/ML
    {Icon: <svg className="m-auto mt-20 w-20 h-20 text-purple-500 animate-pulse" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="30" r="15" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/><circle cx="50" cy="30" r="15" stroke="currentColor" strokeWidth="2"/><rect x="35" y="55" width="30" height="35" rx="3" stroke="currentColor" strokeWidth="2"/><circle cx="42" cy="65" r="3" fill="currentColor"/><circle cx="50" cy="65" r="3" fill="currentColor"/><circle cx="58" cy="65" r="3" fill="currentColor"/><line x1="42" y1="80" x2="42" y2="85" stroke="currentColor" strokeWidth="1.5"/><line x1="50" y1="80" x2="50" y2="85" stroke="currentColor" strokeWidth="1.5"/><line x1="58" y1="80" x2="58" y2="85" stroke="currentColor" strokeWidth="1.5"/></svg>, name: "Ollama", link: "https://ollama.ai/"}
  ]
  useEffect(() => {
    document.title = "Portofolio";
  })
  return (
  <>
    <div className="relative mb-20 pl-10 pt-10">
      <h1 className="text-[60px] font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-xl inline-block">
        Tech Stack
      </h1>
      <div className="absolute left-10 bottom-0 h-2 w-48 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 rounded-full blur-md opacity-75 animate-pulse"></div>
      <div className="absolute left-10 bottom-0 h-1 w-48 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5 p-4 md:p-10 w-full">
    {TechStack.map(Stack => <TechCard Icon={Stack.Icon} name={Stack.name} link={Stack.link}/>)}
    </div>
  </>
  )
}

function TechCard({ Icon, name, link}: { Icon: React.ReactNode, name: string, link: string}): React.ReactElement {
  return (
    <div onClick={()=> window.open(link, "_blank")} className="bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100 p-4 md:p-8 rounded-lg shadow-2xl hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-gray-600 group w-full">
      <div className="flex justify-center mb-4 md:mb-8 group-hover:scale-125 transition-transform duration-300">
        {Icon}
      </div>
      <h3 className="text-center text-sm md:text-xl font-bold tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
        {name}
      </h3>
      <div className="mt-2 md:mt-3 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-300 mx-auto"></div>
    </div>
  );
}