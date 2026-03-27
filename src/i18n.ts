import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        career: 'Career',
        contact: 'Contact Us',
      },
      hero: {
        brand: 'Infinite M&E (EPC)',
        title: 'Your Integrated M&E Engineering Partner',
        subtitle: 'Built for Industry, Engineered for You.',
        cta: 'Explore Our Services',
        scroll: 'Scroll',
      },
      about: {
        title: 'About Us',
        subtitle: 'We are dedicated to delivering high-quality, end-to-end solutions. With expertise in engineering, procurement, and construction.',
        mission: 'Our Missions',
        missionDesc: 'To be a provider of total engineering solutions, delivering exceptional quality and competitive pricing to meet the evolving needs of our clients.',
        vision: 'Our Visions',
        visionDesc: 'To deliver superior service, build long-lasting relationships, and foster growth with our partners.',
        journey: {
          title: 'Our Journey',
          subtitle: 'Each project marks a step forward in our journey, reflecting our continued growth and progress in the industry.',
          steps: {
            step1: { year: '2008', description: 'INFINITE M&E established.' },
            step2: { year: '2009', description: 'INFINITE Sales & Service, subsidiary established.' },
            step3: { year: '2012', description: 'Crossed over RM25 million annual revenue mark.' },
            step4: { year: '2014', description: 'MIP, central region branch established.' },
            step5: { year: '2018', description: 'Skytech Synergy, subsidiary established & INFINITE M&E undergoes transformation into INFINITE EPC.' },
            step6: { year: '2019', description: 'Crossed over RM50 million annual revenue mark.' },
            step7: { year: '2020', description: 'INIEW Environmental, subsidiary established.' },
            step8: { year: '2022', description: 'Crossed over RM100 million annual revenue mark.' },
            step9: { year: '2023', description: 'INFINITE northern branch & INIEW central region branch established.' }
          }
        },
        subsidiaries: {
          title: 'Our Group of Companies',
          subtitle: 'Together, we provide integrated solutions to meet the growing demands of the global market.',
          companies: {
            epc: {
              title: 'INFINITE EPC SDN BHD',
              tag: 'Transformation from Infinite M&E Sdn Bhd',
              description: 'Specialize in HVAC, Cleanroom, Mechanical Utility Solutions.'
            },
            sales: {
              title: 'INFINITE SALES & SERVICE SDN BHD',
              tag: 'Sales and Services Lead',
              description: "Specialize in after sales maintenance and services, optimizing equipment's lifespan."
            },
            mip: {
              title: 'MIP ENGINEERING SOLUTIONS SDN BHD',
              tag: 'Central region subsidiary',
              description: 'Specialize in HVAC Solutions.'
            },
            skytech: {
              title: 'SKYTECH SYNERGY SDN BHD',
              tag: 'Electrical Lead',
              description: 'Specialize Electrical Services from LV to HT.'
            },
            iniew: {
              title: 'INIEW ENVIRONMENTAL SOLUTIONS SDN BHD',
              tag: 'Environmental & Water Solution Lead',
              description: 'Specialize in water treatment for process water and wastewater treatment.'
            }
          }
        },
        clients: {
          title: 'Our Clients',
          subtitle: 'We are proud to partner with a diverse range of clients across various industries. Their trust and collaboration have been key to our continued growth.'
        },
        certifications: {
          title: 'Certifications & Accreditations',
          subtitle: 'Our commitment to quality and safety is reflected in our industry certifications and professional memberships.'
        }
      },
      ai: {
        welcome: 'Hello! I am the Infinite M&E AI Assistant. How can I help you today? You can ask me about our services, or ask for directions to our office in Johor Bahru.',
        title: 'Infinite AI',
        sources: 'Sources:',
        placeholder: 'Ask about our services...',
        error: 'Sorry, I encountered an error. Please try again later.',
        noResponse: 'I could not generate a response.'
      },
      career: {
        title: 'Career Opportunities',
        subtitle: 'Join our team of dedicated professionals and build a rewarding career with Infinite M&E.',
        apply: 'Apply Now',
        positions: {
          bimCoord: 'BIM Coordinator',
          projEng: 'Project Engineer',
          safety: 'Site Safety Supervisor',
          hr: 'Account & HR Executive',
          seniorEng: 'Project / Service / Senior Engineer',
          procurement: 'Procurement / Commercial Controller',
          bimModeler: 'BIM Modeler',
          technician: 'Senior Aircond Technician / Technician',
        },
        location: 'Johor',
        type: 'Full-Time',
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We would love to hear from you. Please feel free to contact us for any enquiry.',
        address: '63, Jalan Mutiara Emas 5/11, Taman Mount Austin, 81100 Johor Bahru, Johor.',
        phone: '+607 361 8326',
        email: 'infinite@infinitemne.com',
        hours: '8:30 A.M. - 5:30 P.M. (Mon - Fri)',
        labels: {
          address: 'Address',
          phone: 'Phone',
          email: 'Email',
          hours: 'Business Hours',
        },
        form: {
          name: 'Your Name',
          email: 'Your Email',
          message: 'Your Message',
          send: 'Send Message',
        }
      },
      home: {
        hero: {
          brand: 'Infinite M&E (EPC)',
          scroll: 'Scroll',
        },
        trust: {
          badge1: { title: 'Integrated Solutions', desc: 'Seamlessly combining M&E, EPC, and specialized services.' },
          badge2: { title: 'Industry Expertise', desc: 'Over a decade of proven experience in complex engineering projects.' },
          badge3: { title: 'Energy Efficiency', desc: 'Designing sustainable systems for optimal performance and savings.' },
          badge4: { title: '24/7 Support', desc: 'Dedicated after-market services ensuring peak operational efficiency.' },
        },
        features: {
          tag: 'Our Expertise',
          title: 'Precision Engineering for Critical Environments',
          subtitle: 'We deliver end-to-end solutions that meet the highest industry standards, ensuring safety, efficiency, and reliability.',
          mainCard: {
            title: 'Our Commitment to Excellence',
            desc: 'Driven by innovation and a passion for engineering, we deliver projects that exceed expectations and build lasting partnerships.',
            cta: 'Learn More About Us',
          },
          cleanroom: { title: 'Precision Cleanroom Environments', desc: 'ISO-certified cleanroom solutions for critical industries, ensuring optimal contamination control.' },
          hvac: { title: 'Advanced HVAC Systems', desc: 'Tailored heating, ventilation, and air conditioning for superior comfort and air quality.' },
          electrical: { title: 'Robust Electrical Infrastructure', desc: 'Comprehensive electrical services from low voltage to high tension.' },
          bottom: {
            title: 'Comprehensive M&E Solutions Under One Roof',
            desc: 'From design and procurement to construction and maintenance, we provide end-to-end services that streamline your project and guarantee results.',
            f1: { title: 'Quality Assured', desc: 'Rigorous testing and ISO compliance.' },
            f2: { title: 'Performance Driven', desc: 'Optimized for maximum efficiency.' },
            f3: { title: 'Sustainable Design', desc: 'Eco-friendly materials and systems.' },
            f4: { title: 'Rapid Deployment', desc: 'On-time delivery, every time.' },
          }
        },
        services: {
          tag: 'Our Services',
          title: 'Engineered for Performance',
          cta: 'Details',
          quote: 'Custom Quote',
          categories: {
            all: 'All',
            cleanroom: 'Cleanroom',
            hvac: 'HVAC',
            bms: 'BMS',
            electrical: 'Electrical',
            utilities: 'Utilities',
            aftermarket: 'After Market',
            environmental: 'Environmental',
          },
          items: {
            cleanroom: { name: 'Cleanroom Design & Build', desc: 'End-to-end cleanroom construction, ISO compliant.' },
            hvac: { name: 'HVAC System Installation', desc: 'Installation of advanced heating, ventilation, and AC systems.' },
            bms: { name: 'BMS Integration', desc: 'Seamless integration of Building Management Systems for smart control.' },
            electrical: { name: 'Electrical Power Distribution', desc: 'Design and implementation of reliable electrical distribution networks.' },
            utilities: { name: 'Mechanical Utility Solutions', desc: 'Custom solutions for industrial mechanical utilities.' },
            maintenance: { name: 'Preventive Maintenance', desc: 'Scheduled maintenance to ensure optimal system performance and longevity.' },
            water: { name: 'Water Treatment Systems', desc: 'Advanced water and wastewater treatment for industrial applications.' },
            repair: { name: 'Emergency Repair Services', desc: 'Rapid response and repair for critical M&E system failures.' },
          }
        },
        testimonials: {
          tag: 'Client Success',
          title: 'Trusted by Industry Leaders',
          items: [
            { author: 'Lim Gaik Hooi', location: 'Johor Bahru', quote: 'Good engineering.', service: 'General M&E' },
            { author: 'Maxmillian Marcus Junior', location: 'Johor Bahru', quote: 'MnE company', service: 'General M&E' },
            { author: 'Kevin IKM', location: 'Johor Bahru', quote: 'Excellent service and reliable solutions.', service: 'Electrical System' },
            { author: 'Puteri Zulaikha', location: 'Johor Bahru', quote: 'Professional team and high-quality work.', service: 'Cleanroom Project' },
            { author: 'Saw Cheewei', location: 'Malaysia', quote: 'Let the right person right solution for you.', service: 'General M&E Consultation' },
            { author: 'ML Radiators & Coolers Sdn Bhd', location: 'Johor Bahru', quote: 'Good services and reasonable price.', service: 'HVAC Maintenance' },
            { author: 'KAC Projects Sdn. Bhd.', location: 'Johor Bahru', quote: 'Good company & services.', service: 'BMS Installation' },
            { author: 'Vincent Ng', location: 'Johor Bahru', quote: 'Highly recommend for complex projects.', service: 'Utilities Installation' },
            { author: 'Hafizul Azreq', location: 'Johor Bahru', quote: 'Reliable and efficient M&E partner.', service: 'After Market Support' },
          ]
        },
        cta: {
          title: 'Ready to Power Your Next Project?',
          button: 'Get a Free Consultation',
          features: {
            innovative: 'Innovative Solutions',
            partnership: 'Trusted Partnership',
            delivery: 'Timely Delivery',
          }
        },
        newsletter: {
          title: 'Stay Ahead with Infinite M&E Insights',
          desc: 'Subscribe to our newsletter for the latest industry trends, project showcases, and expert advice.',
          placeholder: 'Enter your email address',
          button: 'Subscribe',
          success: {
            title: 'Welcome to the community!',
            desc: 'Check your inbox for the latest updates.',
          }
        }
      },
      services_page: {
        tag: 'Our Capabilities',
        title: 'End-to-End Engineering Solutions',
        subtitle: 'Explore our comprehensive range of Mechanical & Electrical services, designed to meet the rigorous demands of modern industry.',
        filters: {
          all: 'All',
          core: 'Core',
          specialized: 'Specialized',
          smart: 'Smart',
          support: 'Support',
        },
        items: {
          cleanroom: {
            title: 'Cleanroom Solutions',
            desc: 'Professionally engineered cleanroom solutions, including wall panel systems, air delivery filtration systems, and lighting panel systems, designed to meet ISO 14644 and FS209E standards.',
          },
          hvac: {
            title: 'HVAC Systems',
            desc: 'Comprehensive Heating, Ventilation, and Air Conditioning solutions focusing on precision temperature control, enhanced air quality management, and improved energy efficiency. Includes ACMV setup and smoke ventilation systems.',
          },
          bms: {
            title: 'Building Management System (BMS)',
            desc: 'Integrated control and monitoring systems for building facilities. Streamline operations, reduce energy consumption, and enhance security with our smart BMS solutions.',
          },
          electrical: {
            title: 'Electrical Systems',
            desc: 'Full range of electrical services, from Low Voltage (LV) to High Tension (HT) systems. We ensure safe, reliable, and efficient power distribution for your entire facility.',
          },
          utilities: {
            title: 'Mechanical Utilities',
            desc: 'Specialized mechanical utility solutions tailored to your industrial needs. From compressed air systems to process cooling water, we design and install robust utility infrastructure.',
          },
          aftermarket: {
            title: 'After Market Services',
            desc: 'After-sales maintenance and services aimed at optimizing equipment lifespan. Preventive maintenance, emergency repairs, and system upgrades to keep your operations running smoothly.',
          },
          environmental: {
            title: 'Environmental & Water Solutions',
            desc: 'Provided through our subsidiary, INIEW Environmental Solutions Sdn Bhd, specializing in water treatment for process water and wastewater treatment, ensuring compliance and sustainability.',
          }
        },
        features: {
          design: 'Customized Design & Engineering',
          installation: 'Professional Installation',
          maintenance: 'Ongoing Maintenance & Support',
        },
        button: 'View Details',
      },
      footer: {
        desc: 'Built for Industry, Engineered for You. Your trusted partner for integrated M&E solutions.',
        services: 'Services',
        about: 'About',
        contact: 'Contact Us',
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: '首页',
        about: '关于我们',
        services: '服务',
        career: '招贤纳士',
        contact: '联系我们',
      },
      hero: {
        brand: 'Infinite M&E (EPC)',
        title: '您的综合机电工程合作伙伴',
        subtitle: '专为工业打造，为您精心设计。',
        cta: '探索我们的服务',
        scroll: '滚动',
      },
      home: {
        hero: {
          brand: 'Infinite M&E (EPC)',
          scroll: '滚动',
        },
        trust: {
          badge1: { title: '综合解决方案', desc: '无缝结合机电、EPC和专业服务。' },
          badge2: { title: '行业专长', desc: '在复杂工程项目方面拥有超过十年的成熟经验。' },
          badge3: { title: '能源效率', desc: '设计可持续系统以实现最佳性能和节约。' },
          badge4: { title: '24/7 支持', desc: '致力于售后服务，确保峰值运营效率。' },
        },
        features: {
          tag: '我们的专长',
          title: '针对关键环境的精密工程',
          subtitle: '我们提供符合最高行业标准的端到端解决方案，确保安全、高效和可靠。',
          mainCard: {
            title: '我们对卓越的承诺',
            desc: '在创新和对工程的热情的驱动下，我们交付超出预期的项目并建立持久的合作伙伴关系。',
            cta: '了解更多关于我们的信息',
          },
          cleanroom: { title: '精密洁净室环境', desc: '适用于关键行业的 ISO 认证洁净室解决方案，确保最佳污染控制。' },
          hvac: { title: '先进的暖通空调系统', desc: '量身定制的供暖、通风和空调，提供卓越的舒适度和空气质量。' },
          electrical: { title: '稳健的电气基础设施', desc: '从低压到高压的全面电气服务。' },
          bottom: {
            title: '一站式综合机电解决方案',
            desc: '从设计和采购到施工和维护，我们提供端到端服务，简化您的项目并保证结果。',
            f1: { title: '质量保证', desc: '严格的测试和 ISO 合规性。' },
            f2: { title: '性能驱动', desc: '针对最高效率进行了优化。' },
            f3: { title: '可持续设计', desc: '环保材料和系统。' },
            f4: { title: '快速部署', desc: '每次都准时交付。' },
          }
        },
        services: {
          tag: '我们的服务',
          title: '为性能而设计',
          cta: '详情',
          quote: '定制报价',
          categories: {
            all: '全部',
            cleanroom: '洁净室',
            hvac: '暖通空调',
            bms: '楼宇管理系统',
            electrical: '电力系统',
            utilities: '公用设施',
            aftermarket: '售后市场',
            environmental: '环境',
          },
          items: {
            cleanroom: { name: '洁净室设计与建造', desc: '端到端洁净室施工，符合 ISO 标准。' },
            hvac: { name: '暖通空调系统安装', desc: '安装先进的供暖、通风和空调系统。' },
            bms: { name: '楼宇管理系统集成', desc: '无缝集成楼宇管理系统，实现智能控制。' },
            electrical: { name: '配电系统', desc: '设计和实施可靠的配电网络。' },
            utilities: { name: '机械公用设施解决方案', desc: '工业机械公用设施的定制解决方案。' },
            maintenance: { name: '预防性维护', desc: '定期维护，确保系统最佳性能和寿命。' },
            water: { name: '水处理系统', desc: '工业应用的高级水和废水处理。' },
            repair: { name: '紧急维修服务', desc: '对关键机电系统故障的快速响应和维修。' },
          }
        },
        testimonials: {
          tag: '客户成功',
          title: '深受行业领导者信赖',
          items: [
            { author: 'Lim Gaik Hooi', location: '新山', quote: '优秀的工程。', service: '综合机电' },
            { author: 'Maxmillian Marcus Junior', location: '新山', quote: '专业的机电公司', service: '综合机电' },
            { author: 'Kevin IKM', location: '新山', quote: '优质的服务和可靠的解决方案。', service: '电力系统' },
            { author: 'Puteri Zulaikha', location: '新山', quote: '专业的团队和高质量的工作。', service: '洁净室项目' },
            { author: 'Saw Cheewei', location: '马来西亚', quote: '让合适的人为您提供合适的解决方案。', service: '综合机电咨询' },
            { author: 'ML Radiators & Coolers Sdn Bhd', location: '新山', quote: '优质的服务和合理的价格。', service: '暖通空调维护' },
            { author: 'KAC Projects Sdn. Bhd.', location: '新山', quote: '优秀的公司和服务。', service: '楼宇管理系统安装' },
            { author: 'Vincent Ng', location: '新山', quote: '强烈推荐用于复杂项目。', service: '公用设施安装' },
            { author: 'Hafizul Azreq', location: '新山', quote: '可靠且高效的机电合作伙伴。', service: '售后市场支持' },
          ]
        },
        cta: {
          title: '准备好为您的下一个项目提供动力了吗？',
          button: '获取免费咨询',
          features: {
            innovative: '创新解决方案',
            partnership: '值得信赖的伙伴关系',
            delivery: '准时交付',
          }
        },
        newsletter: {
          title: '通过 Infinite M&E 洞察保持领先',
          desc: '订阅我们的时事通讯，了解最新的行业趋势、项目展示和专家建议。',
          placeholder: '输入您的电子邮箱地址',
          button: '订阅',
          success: {
            title: '欢迎加入我们的社区！',
            desc: '请检查您的收件箱以获取最新更新。',
          }
        }
      },
      services_page: {
        tag: '我们的能力',
        title: '端到端工程解决方案',
        subtitle: '探索我们全面的机电服务，专为满足现代工业的严格要求而设计。',
        filters: {
          all: '全部',
          core: '核心',
          specialized: '专业',
          smart: '智能',
          support: '支持',
        },
        items: {
          cleanroom: {
            title: '洁净室解决方案',
            desc: '专业设计的洁净室解决方案，包括墙板系统、空气输送过滤系统和照明面板系统，旨在满足 ISO 14644 和 FS209E 标准。',
          },
          hvac: {
            title: '暖通空调 (HVAC) 系统',
            desc: '全面的供暖、通风和空调解决方案，专注于精确的温度控制、增强的空气质量管理和提高的能源效率。包括 ACMV 设置和排烟系统。',
          },
          bms: {
            title: '楼宇管理系统 (BMS)',
            desc: '建筑设施的集成控制和监控系统。通过我们的智能 BMS 解决方案简化操作、降低能耗并增强安全性。',
          },
          electrical: {
            title: '电气系统',
            desc: '从低压 (LV) 到高压 (HT) 系统的全方位电气服务。我们确保为您的整个设施提供安全、可靠和高效的配电。',
          },
          utilities: {
            title: '机械公用设施',
            desc: '根据您的工业需求量身定制的专业机械公用设施解决方案。从压缩空气系统到工艺冷却水，我们设计并安装强大的公用设施基础设施。',
          },
          aftermarket: {
            title: '售后服务',
            desc: '旨在优化设备使用寿命的售后维护和服务。预防性维护、紧急维修和系统升级，以确保您的运营顺利进行。',
          },
          environmental: {
            title: '环境与水处理解决方案',
            desc: '通过我们的子公司 INIEW Environmental Solutions Sdn Bhd 提供，专注于工艺用水和废水处理的水处理，确保合规性和可持续性。',
          }
        },
        features: {
          design: '定制设计与工程',
          installation: '专业安装',
          maintenance: '持续维护与支持',
        },
        button: '查看详情',
      },
      about: {
        title: '关于我们',
        subtitle: '我们致力于提供高质量的端到端解决方案。在工程、采购和施工方面拥有专业知识。',
        mission: '我们的使命',
        missionDesc: '成为全面工程解决方案的供应商，提供卓越的质量和具有竞争力的价格，以满足客户不断变化的需求。',
        vision: '我们的愿景',
        visionDesc: '提供卓越的服务，建立长期的合作关系，并与我们的合作伙伴共同成长。',
        journey: {
          title: '我们的历程',
          subtitle: '每一个项目都标志着我们旅程中的一步，反映了我们在行业中的持续增长和进步。',
          steps: {
            step1: { year: '2008', description: 'INFINITE M&E 成立。' },
            step2: { year: '2009', description: '子公司 INFINITE Sales & Service 成立。' },
            step3: { year: '2012', description: '年收入突破 2500 万令吉。' },
            step4: { year: '2014', description: '中马区分公司 MIP 成立。' },
            step5: { year: '2018', description: '子公司 Skytech Synergy 成立，INFINITE M&E 转型为 INFINITE EPC。' },
            step6: { year: '2019', description: '年收入突破 5000 万令吉。' },
            step7: { year: '2020', description: '子公司 INIEW Environmental 成立。' },
            step8: { year: '2022', description: '年收入突破 1 亿令吉。' },
            step9: { year: '2023', description: 'INFINITE 北马分公司及 INIEW 中马区分公司成立。' }
          }
        },
        subsidiaries: {
          title: '我们的集团公司',
          subtitle: '我们共同提供综合解决方案，以满足全球市场日益增长的需求。',
          companies: {
            epc: {
              title: 'INFINITE EPC SDN BHD',
              tag: '由 Infinite M&E Sdn Bhd 转型而来',
              description: '专注于暖通空调 (HVAC)、洁净室、机械公用设施解决方案。'
            },
            sales: {
              title: 'INFINITE SALES & SERVICE SDN BHD',
              tag: '销售与服务领先者',
              description: '专注于售后维护和服务，优化设备使用寿命。'
            },
            mip: {
              title: 'MIP ENGINEERING SOLUTIONS SDN BHD',
              tag: '中马区子公司',
              description: '专注于暖通空调 (HVAC) 解决方案。'
            },
            skytech: {
              title: 'SKYTECH SYNERGY SDN BHD',
              tag: '电气领先者',
              description: '提供从低压 (LV) 到高压 (HT) 的专业电气服务。'
            },
            iniew: {
              title: 'INIEW ENVIRONMENTAL SOLUTIONS SDN BHD',
              tag: '环境与水处理解决方案领先者',
              description: '专注于工艺用水和废水处理的水处理。'
            }
          }
        },
        clients: {
          title: '我们的客户',
          subtitle: '我们为能与各行各业的多元化客户合作而感到自豪。他们的信任与合作是我们持续增长的关键。'
        },
        certifications: {
          title: '认证与认可',
          subtitle: '我们对质量和安全的承诺体现在我们的行业认证和专业会员资格中。'
        }
      },
      ai: {
        welcome: '您好！我是 Infinite M&E AI 助手。今天我能为您提供什么帮助？您可以询问我们的服务，或询问前往我们新山办公室的路线。',
        title: 'Infinite AI',
        poweredBy: '由 Gemini 提供支持',
        sources: '来源：',
        placeholder: '询问我们的服务...',
        error: '抱歉，我遇到了错误。请稍后再试。',
        noResponse: '我无法生成回复。'
      },
      career: {
        title: '职业机会',
        subtitle: '加入我们的专业团队，在 Infinite M&E 建立一份有意义的职业。',
        apply: '立即申请',
        positions: {
          bimCoord: 'BIM 协调员',
          projEng: '项目工程师',
          safety: '现场安全主管',
          hr: '会计与人力资源主管',
          seniorEng: '项目 / 服务 / 高级工程师',
          procurement: '采购 / 商务总监',
          bimModeler: 'BIM 建模师',
          technician: '高级空调技术员 / 技术员',
        },
        location: '柔佛',
        type: '全职',
      },
      contact: {
        title: '联系我们',
        subtitle: '我们很乐意听取您的意见。如有任何疑问，请随时与我们联系。',
        address: '63, Jalan Mutiara Emas 5/11, Taman Mount Austin, 81100 Johor Bahru, Johor.',
        phone: '+607 361 8326',
        email: 'infinite@infinitemne.com',
        hours: '上午 8:30 - 下午 5:30 (周一至周五)',
        labels: {
          address: '地址',
          phone: '电话',
          email: '电子邮箱',
          hours: '营业时间',
        },
        form: {
          name: '您的姓名',
          email: '您的电子邮箱',
          message: '您的留言',
          send: '发送留言',
        }
      },
      footer: {
        desc: '专为工业打造，为您精心设计。您值得信赖的综合机电解决方案合作伙伴。',
        services: '服务',
        about: '关于我们',
        contact: '联系我们',
        rights: '版权所有。',
        privacy: '隐私政策',
        terms: '服务条款',
      }
    }
  },
  ms: {
    translation: {
      nav: {
        home: 'Utama',
        about: 'Tentang Kami',
        services: 'Perkhidmatan',
        career: 'Kerjaya',
        contact: 'Hubungi Kami',
      },
      hero: {
        brand: 'Infinite M&E (EPC)',
        title: 'Rakan Kejuruteraan M&E Bersepadu Anda',
        subtitle: 'Dibina untuk Industri, Direka untuk Anda.',
        cta: 'Terokai Perkhidmatan Kami',
        scroll: 'Tatal',
      },
      about: {
        title: 'Tentang Kami',
        subtitle: 'Kami berdedikasi untuk menyampaikan penyelesaian hujung ke hujung yang berkualiti tinggi. Dengan kepakaran dalam kejuruteraan, perolehan, dan pembinaan.',
        mission: 'Misi Kami',
        missionDesc: 'Untuk menjadi penyedia penyelesaian kejuruteraan keseluruhan, memberikan kualiti yang luar biasa dan harga yang kompetitif untuk memenuhi keperluan pelanggan kami yang semakin berkembang.',
        vision: 'Visi Kami',
        visionDesc: 'Untuk menyampaikan perkhidmatan yang unggul, membina hubungan jangka panjang, dan memupuk pertumbuhan bersama rakan kongsi kami.',
        journey: {
          title: 'Perjalanan Kami',
          subtitle: 'Setiap projek menandakan satu langkah ke hadapan dalam perjalanan kami, mencerminkan pertumbuhan dan kemajuan berterusan kami dalam industri.',
          steps: {
            step1: { year: '2008', description: 'INFINITE M&E ditubuhkan.' },
            step2: { year: '2009', description: 'INFINITE Sales & Service, anak syarikat ditubuhkan.' },
            step3: { year: '2012', description: 'Melepasi tanda pendapatan tahunan RM25 juta.' },
            step4: { year: '2014', description: 'MIP, cawangan wilayah tengah ditubuhkan.' },
            step5: { year: '2018', description: 'Skytech Synergy, anak syarikat ditubuhkan & INFINITE M&E mengalami transformasi menjadi INFINITE EPC.' },
            step6: { year: '2019', description: 'Melepasi tanda pendapatan tahunan RM50 juta.' },
            step7: { year: '2020', description: 'INIEW Environmental, anak syarikat ditubuhkan.' },
            step8: { year: '2022', description: 'Melepasi tanda pendapatan tahunan RM100 juta.' },
            step9: { year: '2023', description: 'Cawangan utara INFINITE & cawangan wilayah tengah INIEW ditubuhkan.' }
          }
        },
        subsidiaries: {
          title: 'Kumpulan Syarikat Kami',
          subtitle: 'Bersama-sama, kami menyediakan penyelesaian bersepadu untuk memenuhi permintaan pasaran global yang semakin meningkat.',
          companies: {
            epc: {
              title: 'INFINITE EPC SDN BHD',
              tag: 'Transformasi dari Infinite M&E Sdn Bhd',
              description: 'Pakar dalam HVAC, Bilik Bersih, Penyelesaian Utiliti Mekanikal.'
            },
            sales: {
              title: 'INFINITE SALES & SERVICE SDN BHD',
              tag: 'Peneraju Jualan dan Perkhidmatan',
              description: 'Pakar dalam penyelenggaraan dan perkhidmatan selepas jualan, mengoptimumkan jangka hayat peralatan.'
            },
            mip: {
              title: 'MIP ENGINEERING SOLUTIONS SDN BHD',
              tag: 'Anak syarikat wilayah tengah',
              description: 'Pakar dalam Penyelesaian HVAC.'
            },
            skytech: {
              title: 'SKYTECH SYNERGY SDN BHD',
              tag: 'Peneraju Elektrik',
              description: 'Pakar Perkhidmatan Elektrik dari LV ke HT.'
            },
            iniew: {
              title: 'INIEW ENVIRONMENTAL SOLUTIONS SDN BHD',
              tag: 'Peneraju Penyelesaian Alam Sekitar & Air',
              description: 'Pakar dalam rawatan air untuk air proses dan rawatan air sisa.'
            }
          }
        },
        clients: {
          title: 'Pelanggan Kami',
          subtitle: 'Kami berbangga untuk bekerjasama dengan pelbagai pelanggan di pelbagai industri. Kepercayaan dan kerjasama mereka telah menjadi kunci kepada pertumbuhan berterusan kami.'
        },
        certifications: {
          title: 'Pensijilan & Akreditasi',
          subtitle: 'Komitmen kami terhadap kualiti dan keselamatan dicerminkan dalam pensijilan industri dan keahlian profesional kami.'
        }
      },
      ai: {
        welcome: 'Hello! Saya adalah Pembantu AI Infinite M&E. Bagaimanakah saya boleh membantu anda hari ini? Anda boleh bertanya tentang perkhidmatan kami, atau meminta arah ke pejabat kami di Johor Bahru.',
        title: 'Infinite AI',
        poweredBy: 'Dikuasakan oleh Gemini',
        sources: 'Sumber:',
        placeholder: 'Tanya tentang perkhidmatan kami...',
        error: 'Maaf, saya mengalami ralat. Sila cuba sebentar lagi.',
        noResponse: 'Saya tidak dapat menghasilkan maklum balas.'
      },
      career: {
        title: 'Peluang Kerjaya',
        subtitle: 'Sertai pasukan profesional kami yang berdedikasi dan bina kerjaya yang memuaskan dengan Infinite M&E.',
        apply: 'Mohon Sekarang',
        positions: {
          bimCoord: 'Penyelaras BIM',
          projEng: 'Jurutera Projek',
          safety: 'Penyelia Keselamatan Tapak',
          hr: 'Eksekutif Akaun & HR',
          seniorEng: 'Jurutera Projek / Perkhidmatan / Kanan',
          procurement: 'Pengawal Perolehan / Komersial',
          bimModeler: 'Pemodel BIM',
          technician: 'Juruteknik Penyaman Udara Kanan / Juruteknik',
        },
        location: 'Johor',
        type: 'Sepenuh Masa',
      },
      contact: {
        title: 'Hubungi Kami',
        subtitle: 'Kami ingin mendengar daripada anda. Sila hubungi kami untuk sebarang pertanyaan.',
        address: '63, Jalan Mutiara Emas 5/11, Taman Mount Austin, 81100 Johor Bahru, Johor.',
        phone: '+607 361 8326',
        email: 'infinite@infinitemne.com',
        hours: '8:30 Pagi - 5:30 Petang (Isn - Jum)',
        labels: {
          address: 'Alamat',
          phone: 'Telefon',
          email: 'E-mel',
          hours: 'Waktu Perniagaan',
        },
        form: {
          name: 'Nama Anda',
          email: 'E-mel Anda',
          message: 'Mesej Anda',
          send: 'Hantar Mesej',
        }
      },
      home: {
        hero: {
          brand: 'Infinite M&E (EPC)',
          scroll: 'Skrol',
        },
        trust: {
          badge1: { title: 'Penyelesaian Bersepadu', desc: 'Menggabungkan M&E, EPC, dan perkhidmatan khusus dengan lancar.' },
          badge2: { title: 'Kepakaran Industri', desc: 'Lebih sedekad pengalaman terbukti dalam projek kejuruteraan yang kompleks.' },
          badge3: { title: 'Kecekapan Tenaga', desc: 'Mereka bentuk sistem mampan untuk prestasi dan penjimatan optimum.' },
          badge4: { title: 'Sokongan 24/7', desc: 'Perkhidmatan selepas jualan yang berdedikasi memastikan kecekapan operasi puncak.' },
        },
        features: {
          tag: 'Kepakaran Kami',
          title: 'Kejuruteraan Ketepatan untuk Persekitaran Kritikal',
          subtitle: 'Kami menyampaikan penyelesaian hujung ke hujung yang memenuhi piawaian industri tertinggi, memastikan keselamatan, kecekapan dan kebolehpercayaan.',
          mainCard: {
            title: 'Komitmen Kami terhadap Kecemerlangan',
            desc: 'Didorong oleh inovasi dan semangat untuk kejuruteraan, kami menyampaikan projek yang melebihi jangkaan dan membina perkongsian yang berkekalan.',
            cta: 'Ketahui Lebih Lanjut Tentang Kami',
          },
          cleanroom: { title: 'Persekitaran Bilik Bersih Ketepatan', desc: 'Penyelesaian bilik bersih yang diperakui ISO untuk industri kritikal, memastikan kawalan pencemaran yang optimum.' },
          hvac: { title: 'Sistem HVAC Termaju', desc: 'Pemanasan, pengudaraan dan penyaman udara yang disesuaikan untuk keselesaan dan kualiti udara yang unggul.' },
          electrical: { title: 'Infrastruktur Elektrik yang Teguh', desc: 'Perkhidmatan elektrik yang komprehensif daripada voltan rendah kepada voltan tinggi.' },
          bottom: {
            title: 'Penyelesaian M&E Komprehensif Di Bawah Satu Bumbung',
            desc: 'Daripada reka bentuk dan perolehan kepada pembinaan dan penyelenggaraan, kami menyediakan perkhidmatan hujung ke hujung yang memudahkan projek anda dan menjamin hasil.',
            f1: { title: 'Kualiti Terjamin', desc: 'Ujian ketat dan pematuhan ISO.' },
            f2: { title: 'Didorong Prestasi', desc: 'Dioptimumkan untuk kecekapan maksimum.' },
            f3: { title: 'Reka Bentuk Mampan', desc: 'Bahan dan sistem mesra alam.' },
            f4: { title: 'Penyebaran Pantas', desc: 'Penghantaran tepat pada masanya, setiap masa.' },
          }
        },
        services: {
          tag: 'Perkhidmatan Kami',
          title: 'Direka untuk Prestasi',
          cta: 'Butiran',
          quote: 'Sebut Harga Tersuai',
          categories: {
            all: 'Semua',
            cleanroom: 'Bilik Bersih',
            hvac: 'HVAC',
            bms: 'BMS',
            electrical: 'Elektrik',
            utilities: 'Utiliti',
            aftermarket: 'Selepas Jualan',
            environmental: 'Alam Sekitar',
          },
          items: {
            cleanroom: { name: 'Reka Bentuk & Bina Bilik Bersih', desc: 'Pembinaan bilik bersih hujung ke hujung, patuh ISO.' },
            hvac: { name: 'Pemasangan Sistem HVAC', desc: 'Pemasangan sistem pemanasan, pengudaraan dan AC yang canggih.' },
            bms: { name: 'Integrasi BMS', desc: 'Integrasi lancar Sistem Pengurusan Bangunan untuk kawalan pintar.' },
            electrical: { name: 'Pengagihan Kuasa Elektrik', desc: 'Reka bentuk dan pelaksanaan rangkaian pengagihan elektrik yang boleh dipercayai.' },
            utilities: { name: 'Penyelesaian Utiliti Mekanikal', desc: 'Penyelesaian tersuai untuk utiliti mekanikal industri.' },
            maintenance: { name: 'Penyelenggaraan Pencegahan', desc: 'Penyelenggaraan berjadual untuk memastikan prestasi dan jangka hayat sistem yang optimum.' },
            water: { name: 'Sistem Rawatan Air', desc: 'Rawatan air dan air sisa termaju untuk aplikasi industri.' },
            repair: { name: 'Perkhidmatan Membaiki Kecemasan', desc: 'Respons pantas dan pembaikan untuk kegagalan sistem M&E kritikal.' },
          }
        },
        testimonials: {
          tag: 'Kejayaan Pelanggan',
          title: 'Dipercayai oleh Pemimpin Industri',
          items: [
            { author: 'Lim Gaik Hooi', location: 'Johor Bahru', quote: 'Kejuruteraan yang baik.', service: 'M&E Umum' },
            { author: 'Maxmillian Marcus Junior', location: 'Johor Bahru', quote: 'Syarikat M&E', service: 'M&E Umum' },
            { author: 'Kevin IKM', location: 'Johor Bahru', quote: 'Perkhidmatan cemerlang dan penyelesaian yang boleh dipercayai.', service: 'Sistem Elektrik' },
            { author: 'Puteri Zulaikha', location: 'Johor Bahru', quote: 'Pasukan profesional dan kerja berkualiti tinggi.', service: 'Projek Bilik Bersih' },
            { author: 'Saw Cheewei', location: 'Malaysia', quote: 'Biar orang yang tepat memberikan penyelesaian yang tepat untuk anda.', service: 'Konsultasi M&E Umum' },
            { author: 'ML Radiators & Coolers Sdn Bhd', location: 'Johor Bahru', quote: 'Perkhidmatan yang baik dan harga berpatutan.', service: 'Penyelenggaraan HVAC' },
            { author: 'KAC Projects Sdn. Bhd.', location: 'Johor Bahru', quote: 'Syarikat & perkhidmatan yang baik.', service: 'Pemasangan BMS' },
            { author: 'Vincent Ng', location: 'Johor Bahru', quote: 'Sangat disyorkan untuk projek kompleks.', service: 'Pemasangan Utiliti' },
            { author: 'Hafizul Azreq', location: 'Johor Bahru', quote: 'Rakan kongsi M&E yang boleh dipercayai dan cekap.', service: 'Sokongan Selepas Pasaran' },
          ]
        },
        cta: {
          title: 'Bersedia untuk Memperkasakan Projek Seterusnya?',
          button: 'Dapatkan Konsultasi Percuma',
          features: {
            innovative: 'Penyelesaian Inovatif',
            partnership: 'Perkongsian Dipercayai',
            delivery: 'Penghantaran Tepat Masa',
          }
        },
        newsletter: {
          title: 'Kekal Terkehadapan dengan Wawasan Infinite M&E',
          desc: 'Langgan surat berita kami untuk trend industri terkini, pameran projek dan nasihat pakar.',
          placeholder: 'Masukkan alamat e-mel anda',
          button: 'Langgan',
          success: {
            title: 'Selamat datang ke komuniti kami!',
            desc: 'Semak peti masuk anda untuk kemas kini terkini.',
          }
        }
      },
      services_page: {
        tag: 'Keupayaan Kami',
        title: 'Penyelesaian Kejuruteraan Hujung ke Hujung',
        subtitle: 'Terokai rangkaian komprehensif perkhidmatan Mekanikal & Elektrik kami, yang direka untuk memenuhi tuntutan industri moden yang ketat.',
        filters: {
          all: 'Semua',
          core: 'Teras',
          specialized: 'Khusus',
          smart: 'Pintar',
          support: 'Sokongan',
        },
        items: {
          cleanroom: {
            title: 'Penyelesaian Bilik Bersih',
            desc: 'Penyelesaian bilik bersih yang direka secara profesional, termasuk sistem panel dinding, sistem penapisan penghantaran udara, dan sistem panel lampu, direka untuk memenuhi piawaian ISO 14644 dan FS209E.',
          },
          hvac: {
            title: 'Sistem HVAC',
            desc: 'Penyelesaian Pemanasan, Pengudaraan dan Penyaman Udara yang komprehensif memfokuskan pada kawalan suhu ketepatan, pengurusan kualiti udara yang dipertingkatkan, dan kecekapan tenaga yang lebih baik. Termasuk persediaan ACMV dan sistem pengudaraan asap.',
          },
          bms: {
            title: 'Sistem Pengurusan Bangunan (BMS)',
            desc: 'Sistem kawalan dan pemantauan bersepadu untuk kemudahan bangunan. Permudahkan operasi, kurangkan penggunaan tenaga, dan tingkatkan keselamatan dengan penyelesaian BMS pintar kami.',
          },
          electrical: {
            title: 'Sistem Elektrik',
            desc: 'Rangkaian penuh perkhidmatan elektrik, daripada sistem Voltan Rendah (LV) kepada Voltan Tinggi (HT). Kami memastikan pengagihan kuasa yang selamat, boleh dipercayai dan cekap untuk keseluruhan kemudahan anda.',
          },
          utilities: {
            title: 'Utiliti Mekanikal',
            desc: 'Penyelesaian utiliti mekanikal khusus yang disesuaikan dengan keperluan industri anda. Daripada sistem udara termampat kepada air penyejuk proses, kami mereka bentuk dan memasang infrastruktur utiliti yang teguh.',
          },
          aftermarket: {
            title: 'Perkhidmatan Selepas Jualan',
            desc: 'Penyelenggaraan dan perkhidmatan selepas jualan bertujuan mengoptimumkan jangka hayat peralatan. Penyelenggaraan pencegahan, pembaikan kecemasan, dan peningkatan sistem untuk memastikan operasi anda berjalan lancar.',
          },
          environmental: {
            title: 'Penyelesaian Alam Sekitar & Air',
            desc: 'Disediakan melalui anak syarikat kami, INIEW Environmental Solutions Sdn Bhd, pakar dalam rawatan air untuk air proses dan rawatan air sisa, memastikan pematuhan dan kemampanan.',
          }
        },
        features: {
          design: 'Reka Bentuk & Kejuruteraan Tersuai',
          installation: 'Pemasangan Profesional',
          maintenance: 'Penyelenggaraan & Sokongan Berterusan',
        },
        button: 'Lihat Butiran',
      },
      footer: {
        desc: 'Dibina untuk Industri, Direka untuk Anda. Rakan kongsi dipercayai anda untuk penyelesaian M&E bersepadu.',
        services: 'Perkhidmatan',
        about: 'Tentang',
        contact: 'Hubungi Kami',
        rights: 'Hak cipta terpelihara.',
        privacy: 'Dasar Privasi',
        terms: 'Syarat Perkhidmatan',
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
