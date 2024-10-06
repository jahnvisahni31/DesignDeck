/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function MovingBoxes() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    // Array to store multiple colored boxes
    const boxes: THREE.Mesh[] = []
    const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff] // Different colors

    // Create multiple boxes in random positions
    const boxCount = 20 // Increased number of boxes
    for (let i = 0; i < boxCount; i++) {
      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({ color: colors[i % colors.length] })
      const box = new THREE.Mesh(geometry, material)
      
      // Random position within a certain range
      if (i < boxCount / 2) {
        // Place half of the boxes more towards the left
        box.position.x = Math.random() * 10 - 15 // Random x between -15 and -5
      } else {
        box.position.x = Math.random() * 20 - 10 // Random x between -10 and 10
      }
      box.position.y = Math.random() * 20 - 10 // Random y between -10 and 10
      box.position.z = Math.random() * 20 - 10 // Random z between -10 and 10
      
      scene.add(box)
      boxes.push(box)
    }

    // Function to update background color based on theme
    const updateBackgroundColor = () => {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      scene.background = new THREE.Color(isDarkMode ? 0x000000 : 0xffffff)
    }

    // Initial background color setup
    updateBackgroundColor()

    // Listen for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change' , updateBackgroundColor)

    camera.position.z = 5

    let hoverSpeed = 0.005 // Default speed of rotation

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate each box
      boxes.forEach((box, index) => {
        box.rotation.x += hoverSpeed * (index + 1)
        box.rotation.y += hoverSpeed * (index + 1)
      })

      renderer.render(scene, camera)
    }

    // Event listeners for hover effect
    const handleMouseEnter = () => {
      hoverSpeed = 0.01 // Increase speed when hovering
    }

    const handleMouseLeave = () => {
      hoverSpeed = 0.005 // Return to normal speed when not hovering
    }

    // Add hover event listeners to the canvas
    renderer.domElement.addEventListener('mouseenter', handleMouseEnter)
    renderer.domElement.addEventListener('mouseleave', handleMouseLeave)

    animate()

    // Clean up on component unmount
    return () => {
      mountRef.current?.removeChild(renderer.domElement)
      renderer.domElement.removeEventListener('mouseenter', handleMouseEnter)
      renderer.domElement.removeEventListener('mouseleave', handleMouseLeave)
      mediaQuery.removeListener(updateBackgroundColor)
    }
  }, [])

  return <div ref={mountRef} className="w-full h-screen"></div>
}