import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    /**
     * - `default`: Standard storefront container (max-w-7xl)
     * - `narrow`: Focused layout like checkout/login/blog (max-w-5xl)
     * - `fluid`: Full width with horizontal padding for admin dashboards
     */
    size?: "default" | "narrow" | "fluid";
    /**
     * If true, removes horizontal padding for full-bleed sections.
     */
    clean?: boolean;
    className?: string;
}

const Container = ({
    children,
    size = "default",
    clean = false,
    className = "",
    ...props
}: ContainerProps) => {
    // Max-width logic
    const sizeClasses = {
        default: "max-w-7xl",
        narrow: "max-w-5xl",
        fluid: "max-w-[1536px]", // Perfect for high-res dashboard layouts
    };

    // Horizontal padding logic (Mobile -> Desktop)
    const paddingClasses = clean ? "" : "px-4 sm:px-6 lg:px-8";

    return (
        <div
            className={`mx-auto w-full ${sizeClasses[size]} ${paddingClasses} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

export default Container;