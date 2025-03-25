import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, ChevronRight, TrendingUp, DollarSign, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AvatarGroup } from "@/components/ui/avatar-group";
function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Conversions", "Sales", "Revenue", "Growth", "Results"], []);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);
  return <div className="w-full relative min-h-screen flex items-center pt-6 pb-2 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-secondary/80 to-background"></div>
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-palette-purple/10 filter blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-palette-magenta/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 items-center justify-center flex-col">
          <div>
            <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium rounded-full bg-palette-purple border border-palette-purple text-[#270a56]">
              Conversion Rate Optimization Agency
            </span>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-bold">
              <span className="text-palette-navy">Transform Your</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => <motion.span key={index} className="absolute font-semibold shimmer-text" initial={{
                opacity: 0,
                y: "-100"
              }} transition={{
                type: "spring",
                stiffness: 50
              }} animate={titleNumber === index ? {
                y: 0,
                opacity: 1
              } : {
                y: titleNumber > index ? -150 : 150,
                opacity: 0
              }}>
                    {title}
                  </motion.span>)}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              We use data-driven strategies and scientific testing to optimize your website's conversion rate, helping you generate more leads, sales, and revenue without increasing traffic.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
            <Button size="lg" className="rounded-full px-6 py-6 text-base bg-palette-magenta hover:bg-palette-magenta/90">
              Get Free Analysis
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-6 py-6 text-base border-palette-purple text-palette-purple hover:bg-palette-purple/10">
              See Our Services
              <MoveRight className="ml-1 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-4">
            <AvatarGroup />
          </div>
          
          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            {[{
            value: '147%',
            label: 'Avg. Conversion Lift',
            icon: <TrendingUp className="h-5 w-5" />
          }, {
            value: '23.4%',
            label: 'Revenue Increase',
            icon: <DollarSign className="h-5 w-5" />
          }, {
            value: '79%',
            label: 'Higher ROI',
            icon: <BarChart className="h-5 w-5" />
          }].map(stat => <div key={stat.label} className="glass-card rounded-xl p-6 flex flex-col items-center" style={{
            backgroundColor: "#270A56"
          }}>
                <div className="rounded-full backdrop-blur-sm p-2 mb-3 bg-slate-50">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1 text-white">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
}
export { Hero };