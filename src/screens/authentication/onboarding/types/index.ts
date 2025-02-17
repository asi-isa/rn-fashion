import { SlideProps } from "../components/slider/slide";
import { FooterSlideProps } from "../components/footer/footer-slide";
import { useOnboardingAnimation } from "../hooks/useOnboardingAnimation";

export type FullSlide = SlideProps & Omit<FooterSlideProps, "onPress">;

export interface OnboardingConfig {
  slides: FullSlide[];
  radius: number;
}

export type OnboardingAnimation = ReturnType<typeof useOnboardingAnimation>;
