import * as React from "react"
import TestimonialCard from "../../atoms/TestimonialCard"
import SectionTitle from "../../atoms/SectionTitle"
import * as styles from "./TestimonialsSection.module.css"

const TestimonialsSection = ({ 
  title = "お客様の声",
  subtitle = "信頼いただいているお客様からの評価",
  testimonials = [],
  className = ""
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    const sectionRef = document.getElementById('testimonials-section')
    if (sectionRef) {
      observer.observe(sectionRef)
    }

    return () => observer.disconnect()
  }, [])

  const defaultTestimonials = [
    {
      quote: "素晴らしいパートナーシップを築くことができました。技術力はもちろん、ビジネス理解の深さに感動しています。おかげで売上が30%向上しました。",
      author: "田中 太郎",
      position: "代表取締役",
      company: "株式会社イノベーション",
      avatar: "/Hero01.jpg",
      rating: 5
    },
    {
      quote: "迅速で柔軟な対応に本当に助けられました。私たちの要望を的確に理解し、期待を上回る成果を提供してくれるチームです。",
      author: "佐藤 花子",
      position: "CTO",
      company: "テックソリューションズ",
      avatar: "/Hero01.jpg",
      rating: 5
    },
    {
      quote: "セキュリティとパフォーマンスの両面で安心できるシステムを構築していただきました。24時間サポートも心強いです。",
      author: "山田 次郎",
      position: "システム部長",
      company: "グローバル商事",
      avatar: "/Hero01.jpg",
      rating: 5
    }
  ]

  const testimonialsToRender = testimonials.length > 0 ? testimonials : defaultTestimonials

  // 自動スライド機能
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === testimonialsToRender.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonialsToRender.length])

  const handleSlideChange = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="testimonials-section" className={`${styles.testimonialsSection} ${className}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <SectionTitle 
            title={title}
            subtitle={subtitle}
            isVisible={isVisible}
            alignment="center"
          />
        </div>
        
        <div className={styles.testimonialWrapper}>
          <div 
            className={styles.testimonialSlider}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonialsToRender.map((testimonial, index) => (
              <div key={index} className={styles.slideItem}>
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                  avatar={testimonial.avatar}
                  rating={testimonial.rating}
                  isVisible={isVisible}
                  delay={index * 200}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* ドットインジケーター */}
        <div className={styles.dots}>
          {testimonialsToRender.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${currentSlide === index ? styles.dotActive : ''}`}
              onClick={() => handleSlideChange(index)}
              aria-label={`スライド ${index + 1} に移動`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
